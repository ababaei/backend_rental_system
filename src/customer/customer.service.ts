import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  // Create a new customer
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.prisma.customer.create({
      data: createCustomerDto,
    });
  }

  // Update customer details
  async update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return await this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }
}