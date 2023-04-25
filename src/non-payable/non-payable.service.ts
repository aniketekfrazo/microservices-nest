import { Injectable } from '@nestjs/common';
import { CreateNonPayableDto } from './dto/create-non-payable.dto';
import { UpdateNonPayableDto } from './dto/update-non-payable.dto';
import { NonPayable } from './schemas/non-payable';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NonPayableService {

  constructor(@InjectModel(NonPayable.name) private birdModel: Model<NonPayable>){}
  create(createNonPayableDto: CreateNonPayableDto) : Promise<NonPayable>{
    const model=new this.birdModel();
    model.name=createNonPayableDto.name;
    model.code=createNonPayableDto.code;
    model.isDisable=createNonPayableDto.isDisable;

    return model.save();
  }

  findAll(): Promise<NonPayable[]> {
    return this.birdModel.find().exec();
  }

  findOne(id: string):Promise<NonPayable> {
    return this.birdModel.findById(id).exec();;
  }

  update(id: string, updateNonPayableDto: UpdateNonPayableDto) {
    return this.birdModel.updateOne({_id:id},
      {name:updateNonPayableDto.name,
        code:updateNonPayableDto.code,
        isDisable:updateNonPayableDto.isDisable}).exec();
  }

  remove(id: string) {
    return this.birdModel.deleteOne({_id:id}).exec();
  }
}
