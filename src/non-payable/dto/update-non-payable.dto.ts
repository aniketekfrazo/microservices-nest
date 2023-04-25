import { PartialType } from '@nestjs/mapped-types';
import { CreateNonPayableDto } from './create-non-payable.dto';

export class UpdateNonPayableDto extends PartialType(CreateNonPayableDto) {}
