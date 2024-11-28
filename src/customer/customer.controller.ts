import { Controller, Post, Body, Put, Param, ParseIntPipe } from '@nestjs/common';
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

  @Put(':customer_id')
  update(@Param('customer_id', ParseIntPipe) customer_id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customer.update(customer_id, updateCustomerDto);
  }
}