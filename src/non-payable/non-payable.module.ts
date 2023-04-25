import { Module } from '@nestjs/common';
import { NonPayableService } from './non-payable.service';
import { NonPayableController } from './non-payable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NonPayable, NonPayableSchema } from './schemas/non-payable';

@Module({
  imports: [MongooseModule.forFeature([{ name: NonPayable.name, schema: NonPayableSchema }])],
  controllers: [NonPayableController],
  providers: [NonPayableService]
})
export class NonPayableModule {}
