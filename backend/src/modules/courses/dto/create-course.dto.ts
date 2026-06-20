import { IsString, IsOptional, IsEnum, IsBoolean, IsInt, IsArray, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Difficulty } from '@prisma/client';

export class CreateCourseDto {
  @ApiProperty() @IsString() title: string;
  @ApiProperty() @IsString() titleFa: string;
  @ApiProperty() @IsString() description: string;
  @ApiProperty() @IsString() descriptionFa: string;
  @ApiProperty() @IsString() slug: string;
  @ApiPropertyOptional({ enum: Difficulty }) @IsOptional() @IsEnum(Difficulty) level?: Difficulty;
  @ApiPropertyOptional() @IsOptional() @IsString() coverImageUrl?: string;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isPublished?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsArray() @IsString({ each: true }) tags?: string[];
}

export class UpdateCourseDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() titleFa?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() descriptionFa?: string;
  @IsOptional() @IsEnum(Difficulty) level?: Difficulty;
  @IsOptional() @IsString() coverImageUrl?: string;
  @IsOptional() @IsBoolean() isPublished?: boolean;
}
