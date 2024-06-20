import { IsString, IsNotEmpty, Length, IsOptional } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: "the user' username" })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: "the user' password", deprecated: true })
  readonly password: string;

  @IsNotEmpty()
  readonly role: string;

  @IsString()
  @IsOptional()
  readonly status?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
