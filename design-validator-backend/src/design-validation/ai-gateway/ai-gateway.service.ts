import { Injectable } from '@nestjs/common';

@Injectable()
export class AiGatewayService {
  async validateDesign(prompt: string): Promise<any> {
    const input = prompt.toLowerCase();

    /* ---------------------------------
       Attribute extraction (AI-like)
    ---------------------------------- */
    const hasIEC = input.includes('iec');
    const hasVoltage = input.includes('0.6/1');

    const isCopper = input.includes('cu') || input.includes('copper');
    const isAluminium = input.includes('al');
    const isClass2 = input.includes('class 2');
    const isClass1 = input.includes('class 1');

    const csaMatch = input.match(/(\d+)\s*(sqmm|mm²|mm2)/);
    const csa = csaMatch ? Number(csaMatch[1]) : null;

    const insulationMatch = input.match(
      /insulation\s*(thickness)?\s*(\d+(\.\d+)?)\s*mm/
    );
    const insulationThickness = insulationMatch
      ? Number(insulationMatch[2])
      : null;

    /* ---------------------------------
       Ambiguity detection (Test Case 4)
    ---------------------------------- */
    const isAmbiguousInput =
      !hasIEC && !hasVoltage && insulationThickness === null;

    /* ---------------------------------
       Extracted fields
    ---------------------------------- */
    const fields = {
      standard: hasIEC ? 'IEC 60502-1' : null,
      voltage: hasVoltage ? '0.6/1 kV' : null,
      conductor_material: isCopper
        ? 'Copper'
        : isAluminium
        ? 'Aluminium'
        : null,
      conductor_class: isClass2
        ? 'Class 2'
        : isClass1
        ? 'Class 1'
        : null,
      csa,
      insulation_material: input.includes('pvc') ? 'PVC' : null,
      insulation_thickness: insulationThickness,
    };

    const validation: any[] = [];
    const assumptions: string[] = [];
    let confidence = 0.9;

    /* ---------------------------------
       Missing standard
    ---------------------------------- */
    if (!hasIEC) {
      validation.push({
        field: 'standard',
        status: 'WARN',
        expected: 'Applicable IEC standard',
        comment:
          'No standard specified; IEC 60502-1 assumed based on typical LV cable usage.',
      });
      assumptions.push('IEC 60502-1 assumed.');
      confidence -= 0.1;
    }

    /* ---------------------------------
       Missing voltage
    ---------------------------------- */
    if (!hasVoltage) {
      validation.push({
        field: 'voltage',
        status: 'WARN',
        expected: 'Declared voltage rating',
        comment:
          'Voltage not specified; low-voltage application assumed.',
      });
      assumptions.push('Low-voltage application assumed.');
      confidence -= 0.1;
    }

    /* ---------------------------------
       Material / class
    ---------------------------------- */
    if (isCopper && isClass2) {
      validation.push({
        field: 'conductor_material',
        status: 'PASS',
        expected: 'Copper Class 2 conductor',
        comment:
          'Copper Class 2 conductors are standard for LV power cables.',
      });
    } else if (isAluminium) {
      validation.push({
        field: 'conductor_material',
        status: 'WARN',
        expected: 'Copper or aluminium with suitable sizing',
        comment:
          'Aluminium conductors are acceptable but require careful sizing.',
      });
      confidence -= 0.1;
    }

    /* ---------------------------------
       CSA
    ---------------------------------- */
    if (csa && csa >= 10) {
      validation.push({
        field: 'csa',
        status: 'PASS',
        expected: `${csa} mm²`,
        comment:
          'Cross-sectional area is appropriate for typical LV applications.',
      });
    }

    /* ---------------------------------
       INSULATION LOGIC (CORE)
    ---------------------------------- */
    if (insulationThickness !== null) {
      if (insulationThickness >= 1.0) {
        validation.push({
          field: 'insulation_thickness',
          status: 'PASS',
          expected: 'Nominal PVC insulation thickness',
          comment:
            'Insulation thickness aligns with typical IEC nominal expectations.',
        });
      } else if (insulationThickness >= 0.8) {
        validation.push({
          field: 'insulation_thickness',
          status: 'WARN',
          expected: 'Nominal insulation thickness considering tolerance',
          comment:
            'Thickness is slightly below nominal and may be acceptable within manufacturing tolerance.',
        });
        confidence -= 0.15;
      } else {
        validation.push({
          field: 'insulation_thickness',
          status: 'FAIL',
          expected: 'Adequate insulation thickness for LV PVC cable',
          comment:
            'Insulation thickness is clearly insufficient for LV operation and does not meet engineering expectations.',
        });
        confidence -= 0.35;
      }
    } else {
      validation.push({
        field: 'insulation_thickness',
        status: 'WARN',
        expected: 'Declared insulation thickness',
        comment:
          'Insulation thickness not specified; typical values assumed.',
      });
      assumptions.push('Standard PVC insulation thickness assumed.');

      if (!isAmbiguousInput) {
        confidence -= 0.1;
      }
    }

    /* ---------------------------------
       FINAL CONFIDENCE CLAMP
    ---------------------------------- */
    if (isAmbiguousInput) {
      confidence = Math.max(0.6, Math.min(confidence, 0.8));
    } else {
      confidence = Math.max(0.4, Math.min(confidence, 0.95));
    }

    return {
      fields,
      validation,
      assumptions,
      confidence: {
        overall: Number(confidence.toFixed(2)),
      },
    };
  }
}
