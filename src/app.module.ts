import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreturesModule } from './cretures/cretures.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CreturesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
