import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Controller('test')
export class TestController {
  constructor(private prisma: PrismaService) {}

  @Get()
  hello() {
    return this.prisma.customer.findMany();
  }
}
