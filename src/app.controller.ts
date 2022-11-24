import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('age')
  async create(@Body() birthDateDto: string) {
    return this.appService.calulateAgeWithBirthDate(birthDateDto);
  }
}
