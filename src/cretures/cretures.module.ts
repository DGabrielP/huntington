import { Module } from '@nestjs/common';
import { CreturesService } from './cretures.service';
import { CreturesController } from './cretures.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CreturesController],
  providers: [CreturesService],
  imports: [PrismaModule],
})
export class CreturesModule {}
