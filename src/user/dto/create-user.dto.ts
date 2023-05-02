import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()@IsString()
    name: string;

    @IsString()@IsNotEmpty()
    country:string;

    @IsNotEmpty()@IsNumber()
    number:number;
}
