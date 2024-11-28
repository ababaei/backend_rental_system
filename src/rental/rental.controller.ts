import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('rentals')
export class RentalController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async createRental(@Body() body: { rental_date: string; return_date: string; customer_id: number }) {
    const rentalDate = new Date(body.rental_date);
    const returnDate = new Date(body.return_date);

    if (returnDate < rentalDate) {
      throw new BadRequestException('Return date must be after rental date.');
    }

    if (returnDate > new Date(rentalDate.getTime() + 21 * 24 * 60 * 60 * 1000)) {
      throw new BadRequestException('Rental cannot exceed 3 weeks.');
    }

    return this.prisma.rental.create({
      data: {
        rental_date: rentalDate,
        return_date: returnDate,
        customer: { connect: { customer_id: body.customer_id } },
      },
    });
  }
}