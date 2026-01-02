import { ValidateDesignDto } from './dto/validate-design.dto';
import { AiGatewayService } from './ai-gateway/ai-gateway.service';
export declare class DesignValidationService {
    private readonly aiGatewayService;
    constructor(aiGatewayService: AiGatewayService);
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
