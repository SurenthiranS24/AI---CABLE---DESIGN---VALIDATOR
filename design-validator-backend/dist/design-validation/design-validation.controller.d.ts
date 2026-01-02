import { DesignValidationService } from './design-validation.service';
import { ValidateDesignDto } from './dto/validate-design.dto';
export declare class DesignValidationController {
    private readonly designValidationService;
    constructor(designValidationService: DesignValidationService);
    validateDesign(dto: ValidateDesignDto): Promise<{
        input: string | {
            standard?: string;
            voltage?: string;
            conductor_material?: string;
            conductor_class?: string;
            csa?: number;
            insulation_material?: string;
            insulation_thickness?: number;
        } | undefined;
        aiResult: any;
        generatedAt: Date;
    }>;
}
