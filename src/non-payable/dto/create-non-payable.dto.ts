

import { IsString, IsInt, IsNotEmpty, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateNonPayableDto {

    @IsNotEmpty()@IsString()
    name: string;

    @IsNotEmpty()@IsNumber()
    code:number=10;

    @IsBoolean()
    isDisable:boolean;
}

