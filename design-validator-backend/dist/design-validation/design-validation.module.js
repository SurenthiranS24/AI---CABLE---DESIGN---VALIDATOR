"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignValidationModule = void 0;
const common_1 = require("@nestjs/common");
const design_validation_controller_1 = require("./design-validation.controller");
const design_validation_service_1 = require("./design-validation.service");
const ai_gateway_service_1 = require("./ai-gateway/ai-gateway.service");
let DesignValidationModule = class DesignValidationModule {
};
exports.DesignValidationModule = DesignValidationModule;
exports.DesignValidationModule = DesignValidationModule = __decorate([
    (0, common_1.Module)({
        controllers: [design_validation_controller_1.DesignValidationController],
        providers: [design_validation_service_1.DesignValidationService, ai_gateway_service_1.AiGatewayService],
    })
], DesignValidationModule);
//# sourceMappingURL=design-validation.module.js.map