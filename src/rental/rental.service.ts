import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRentalDto } from './dto/create-rental.dto';

@Injectable()
export class RentalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(@Body() createRentalDto: CreateRentalDto) {
    return this.prisma.rental.create({
      data: createRentalDto,
    });
  }
}