import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBirdDto {

    @IsNotEmpty()@IsString()
    name: string;

    @IsString()@IsNotEmpty()
    country:string;

    @IsNotEmpty()@IsNumber()
    number:number;
}
