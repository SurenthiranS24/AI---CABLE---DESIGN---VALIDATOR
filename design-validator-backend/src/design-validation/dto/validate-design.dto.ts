import { IsOptional, IsObject, IsString, IsNumber } from 'class-validator';

export class ValidateDesignDto {
  @IsOptional()
  @IsObject()
  structuredInput?: {
    standard?: string;
    voltage?: string;
    conductor_material?: string;
    conductor_class?: string;
    csa?: number;
    insulation_material?: string;
    insulation_thickness?: number;
  };

  @IsOptional()
  @IsString()
  freeTextInput?: string;
}
