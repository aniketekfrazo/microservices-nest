import { Module } from '@nestjs/common';
import { BirdService } from './bird.service';
import { BirdController } from './bird.controller';
import { Bird, BirdSchema } from './schemas/bird';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bird.name, schema: BirdSchema }])],
  
  controllers: [BirdController],
  providers: [BirdService]
})
export class BirdModule {}
