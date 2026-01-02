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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignValidationController = void 0;
const common_1 = require("@nestjs/common");
const design_validation_service_1 = require("./design-validation.service");
const validate_design_dto_1 = require("./dto/validate-design.dto");
let DesignValidationController = class DesignValidationController {
    designValidationService;
    constructor(designValidationService) {
        this.designValidationService = designValidationService;
    }
    async validateDesign(dto) {
        return this.designValidationService.validateDesign(dto);
    }
};
exports.DesignValidationController = DesignValidationController;
__decorate([
    (0, common_1.Post)('validate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_design_dto_1.ValidateDesignDto]),
    __metadata("design:returntype", Promise)
], DesignValidationController.prototype, "validateDesign", null);
exports.DesignValidationController = DesignValidationController = __decorate([
    (0, common_1.Controller)('design'),
    __metadata("design:paramtypes", [design_validation_service_1.DesignValidationService])
], DesignValidationController);
//# sourceMappingURL=design-validation.controller.js.map