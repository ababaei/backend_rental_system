import { IsString, IsEmail, IsTimeZone } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsTimeZone()
    timezone: string
  }