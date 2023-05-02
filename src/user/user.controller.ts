import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { extname } from 'path';

import { read, writeFileXLSX, readFile, utils } from "xlsx";
import { multerOptions } from 'src/utils/multerOptions';
import { multerOptionsPrev } from 'src/utils/multerOptionsPrev';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

 
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptionsPrev))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log("data", file.path);
    let file2 = readFile(file.path);
    let data = []

    const sheets = file2.SheetNames

    for (let i = 0; i < sheets.length; i++) {
      const temp = utils.sheet_to_json(
        file2.Sheets[file2.SheetNames[i]])
      temp.forEach((res) => {
        data.push(res)
      })
    }
    return this.userService.uploadData(data);
  }
}
