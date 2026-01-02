"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignValidationService = void 0;
const common_1 = require("@nestjs/common");
const ai_gateway_service_1 = require("./ai-gateway/ai-gateway.service");
const validation_prompt_1 = require("./prompts/validation.prompt");
let DesignValidationService = class DesignValidationService {
    aiGatewayService;
    constructor(aiGatewayService) {
        this.aiGatewayService = aiGatewayService;
    }
    async validateDesign(dto) {
        if (!dto.structuredInput && !dto.freeTextInput) {
            throw new common_1.BadRequestException('Either structuredInput or freeTextInput must be provided');
        }
        const inputPayload = dto.structuredInput ?? dto.freeTextInput;
        const prompt = (0, validation_prompt_1.buildValidationPrompt)(inputPayload);
        const aiResult = await this.aiGatewayService.validateDesign(prompt);
        return {
            input: inputPayload,
            aiResult,
            generatedAt: new Date(),
        };
    }
};
exports.DesignValidationService = DesignValidationService;
exports.DesignValidationService = DesignValidationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ai_gateway_service_1.AiGatewayService])
], DesignValidationService);
//# sourceMappingURL=design-validation.service.js.map