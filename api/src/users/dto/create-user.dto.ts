import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
