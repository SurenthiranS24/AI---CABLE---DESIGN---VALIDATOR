export function buildValidationPrompt(input: any): string {
  return `
You are a senior electrical cable design engineer with experience in IEC standards.

Your task is to validate a low-voltage cable design using engineering judgment.
This is NOT a deterministic rule check.

Instructions:
- Extract all relevant design attributes from the input.
- If any information is missing or ambiguous, clearly state assumptions.
- Use IEC 60502-1 and IEC 60228 engineering expectations.
- Do NOT quote clause numbers or tables.
- For each attribute, decide one of: PASS, WARN, FAIL.
- WARN should be used for borderline or assumed cases.
- FAIL should be used for clearly non-compliant designs.
- Always provide reasoning.
- Provide an overall confidence score between 0 and 1.

Input:
${JSON.stringify(input, null, 2)}

Return STRICTLY in the following JSON format (no extra text):

{
  "fields": {
    "standard": "",
    "voltage": "",
    "conductor_material": "",
    "conductor_class": "",
    "csa": null,
    "insulation_material": "",
    "insulation_thickness": null
  },
  "validation": [
    {
      "field": "",
      "status": "PASS | WARN | FAIL",
      "expected": "",
      "comment": ""
    }
  ],
  "assumptions": [],
  "confidence": {
    "overall": 0.0
  }
}
`;
}
