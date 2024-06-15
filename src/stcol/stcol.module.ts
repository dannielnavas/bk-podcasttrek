import { Module } from '@nestjs/common';
import { StcolController } from './stcol.controller';
import { StcolService } from './stcol.service';

@Module({
  controllers: [StcolController],
  providers: [StcolService],
})
export class StcolModule {}
