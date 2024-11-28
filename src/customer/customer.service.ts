import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.prisma.customer.create({
      data: createCustomerDto,
    });
  }

  // Update customer details
  async update(@Param('customer_id', ParseIntPipe) customer_id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
    return await this.prisma.customer.update({
      where: { customer_id },
      data: updateCustomerDto,
    });
  }
}