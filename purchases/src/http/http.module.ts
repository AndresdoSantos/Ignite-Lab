import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';

import { TestController } from './test.controller';

// Faz o módulo HTTP ler variáveis ambientes.
@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [TestController],
})
export class HttpModule {}
