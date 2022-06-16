import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TestController } from './test.controller';

// Faz o módulo HTTP ler variáveis ambientes.
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TestController],
})
export class HttpModule {}
