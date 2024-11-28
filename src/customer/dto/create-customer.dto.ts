import { IsString, IsEmail, IsTimeZone } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsEmail()
    email: string;

    @IsTimeZone()
    timezone: string
  }