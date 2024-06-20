import {
  IsNotEmpty,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsDate,
  IsEmpty,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  status?: boolean;

  @IsOptional()
  @IsBoolean()
  check: boolean;

  @IsOptional()
  @IsDateString()
  startDate: Date;

  @IsOptional()
  endDate?: string;

  @IsNotEmpty()
  user: string;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  status?: boolean;

  @IsOptional()
  @IsBoolean()
  check?: boolean;

  @IsOptional()
  @IsDateString()
  startDate?: Date;

  @IsOptional()
  endDate?: string;

  @IsOptional()
  @IsString()
  user?: string; // Assumed to be string, you may need to adjust based on your setup
}
