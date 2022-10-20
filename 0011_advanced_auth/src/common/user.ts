import { IsString, IsInt } from 'class-validator';

export class UserEntity {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}