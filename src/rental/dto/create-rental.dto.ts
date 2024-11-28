import { IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateRentalDto {
    @IsString()
    customer_id: number;

    @IsString()
    inventory_id: string;

    @IsDateString()
    @IsNotEmpty()
    rental_date: string;

    @IsDateString()
    @IsNotEmpty()
    return_date: string;
}