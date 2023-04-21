import { Injectable } from '@nestjs/common';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { Model } from 'mongoose';
import { Bird } from './schemas/bird';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BirdService {

  constructor(@InjectModel(Bird.name) private birdModel: Model<Bird>){}
  create(createBirdDto: CreateBirdDto) : Promise<Bird>{
    const model=new this.birdModel();
    model.name=createBirdDto.name;
    model.country=createBirdDto.country;
    model.number=createBirdDto.number;

    return model.save();
  }

  findAll(): Promise<Bird[]> {
    return this.birdModel.find().exec();
  }

  findOne(id: string):Promise<Bird> {
    return this.birdModel.findById(id).exec();;
  }

  update(id: string, updateBirdDto: UpdateBirdDto) {
    return this.birdModel.updateOne({_id:id},
      {name:updateBirdDto.name,
        country:updateBirdDto.country,
        number:updateBirdDto.number}).exec();
  }

  remove(id: string) {
    return this.birdModel.deleteOne({_id:id}).exec();
  }
}
