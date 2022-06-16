import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta o Prisma para todo o restante do app usá-lo.
})
export class DatabaseModule {}
