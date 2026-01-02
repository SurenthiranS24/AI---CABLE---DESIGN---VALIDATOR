import { Controller, Post, Body } from '@nestjs/common';
import { DesignValidationService } from './design-validation.service';
import { ValidateDesignDto } from './dto/validate-design.dto';

@Controller('design')
export class DesignValidationController {
  constructor(
    private readonly designValidationService: DesignValidationService,
  ) {}

  @Post('validate')
  async validateDesign(@Body() dto: ValidateDesignDto) {
    return this.designValidationService.validateDesign(dto);
  }
}
