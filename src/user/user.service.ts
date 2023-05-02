import { Body, Injectable, ParseArrayPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './schemas/user';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';

@Injectable()
export class UserService {
  
  constructor(@InjectModel(User.name) private userModel: Model<User>){}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  uploadData(@Body(new ParseArrayPipe({ items: CreateUserDto }))
  createUserDtos: CreateUserDto[]): string {
    console.log("data",createUserDtos);
    this.userModel.insertMany(createUserDtos);
    return 'This action adds  new users';
  }
}
