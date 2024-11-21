// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUser Dto } from './dto/create-user.dto';
import { LoginUser Dto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUser Dto: CreateUser Dto) {
    return this.authService.register(createUser Dto);
  }

  @Post('login')
  async login(@Body() loginUser Dto: LoginUser Dto) {
    return

