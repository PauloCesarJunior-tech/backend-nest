// src/auth/dto/create-user.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreateUser Dto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

// src/auth/dto/login-user.dto.ts
import { IsString } from 'class-validator';

export class LoginUser Dto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

