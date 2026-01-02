import { Injectable, BadRequestException } from '@nestjs/common';
import { ValidateDesignDto } from './dto/validate-design.dto';
import { AiGatewayService } from './ai-gateway/ai-gateway.service';
import { buildValidationPrompt } from './prompts/validation.prompt';

@Injectable()
export class DesignValidationService {
  constructor(
    private readonly aiGatewayService: AiGatewayService,
  ) {}

  async validateDesign(dto: ValidateDesignDto) {
    if (!dto.structuredInput && !dto.freeTextInput) {
      throw new BadRequestException(
        'Either structuredInput or freeTextInput must be provided',
      );
    }

    const inputPayload = dto.structuredInput ?? dto.freeTextInput;

    // 1. Build AI prompt
    const prompt = buildValidationPrompt(inputPayload);

    // 2. Call AI gateway (mocked for now)
    const aiResult = await this.aiGatewayService.validateDesign(prompt);

    // 3. Return structured response
    return {
      input: inputPayload,
      aiResult,
      generatedAt: new Date(),
    };
  }
}
