import { Module } from '@nestjs/common';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';

@Module({
  providers: [RentalService],
  controllers: [RentalController]
})
export class RentalModule {}