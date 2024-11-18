import {
  IsInt,
  IsString,
  Min,
  Max,
  IsOptional,
  IsNotEmpty,
} from 'class-validator'

export class Env {
  @IsString()
  @IsOptional()
  readonly NODE_ENV!: string

  @IsInt()
  @Min(2)
  @Max(2)
  @IsNotEmpty()
  readonly ARGON2_TYPE!: number

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  readonly ARGON2_TIME_COST!: number

  @IsInt()
  readonly PORT: number = 3333
}
