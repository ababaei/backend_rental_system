import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RentalService } from './rental/rental.service';
import { RentalModule } from './rental/rental.module';
import { CustomerModule } from './customer/customer.module';
import { PrismaModule } from './prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleService } from './schedule/schedule.service';
import { ScheduleController } from './schedule/schedule.controller';

@Module({
  imports: [
    RentalModule,
    CustomerModule,
    PrismaModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController, ScheduleController],
  providers: [AppService, PrismaService, RentalService, ScheduleService],
})
export class AppModule {}