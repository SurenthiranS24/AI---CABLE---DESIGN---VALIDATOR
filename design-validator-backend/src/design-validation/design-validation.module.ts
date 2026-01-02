import { Module } from '@nestjs/common';
import { DesignValidationController } from './design-validation.controller';
import { DesignValidationService } from './design-validation.service';
import { AiGatewayService } from './ai-gateway/ai-gateway.service';

@Module({
  controllers: [DesignValidationController],
  providers: [DesignValidationService, AiGatewayService],
})
export class DesignValidationModule {}
