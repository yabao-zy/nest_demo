import { Controller, Get,UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { RolesGuard } from './guard/roles.guard'

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
