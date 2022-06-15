import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Faz o módulo HTTP ler variáveis ambientes.
@Module({
  imports: [ConfigModule.forRoot()],
})
export class HttpModule {}
