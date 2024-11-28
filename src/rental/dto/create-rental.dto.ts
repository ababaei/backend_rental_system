import { IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateRentalDto {
    @IsString()
    customerId: string;

    @IsString()
    filmId: string;

    @IsDateString()
    @IsNotEmpty()
    startDate: string;

    @IsDateString()
    @IsNotEmpty()
    returnDate: string;
}