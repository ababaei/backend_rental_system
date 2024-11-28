import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customer: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customer.create(createCustomerDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customer.update(id, updateCustomerDto);
  }
}