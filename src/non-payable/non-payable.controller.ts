import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NonPayableService } from './non-payable.service';
import { CreateNonPayableDto } from './dto/create-non-payable.dto';
import { UpdateNonPayableDto } from './dto/update-non-payable.dto';

@Controller('non-payable')
export class NonPayableController {
  constructor(private readonly nonPayableService: NonPayableService) {}

  @Post()
  create(@Body() createNonPayableDto: CreateNonPayableDto) {
    return this.nonPayableService.create(createNonPayableDto);
  }

  @Get()
  findAll() {
    return this.nonPayableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nonPayableService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNonPayableDto: UpdateNonPayableDto) {
    return this.nonPayableService.update(id, updateNonPayableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nonPayableService.remove(id);
  }
}
