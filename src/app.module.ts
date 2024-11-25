import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RentalService } from './rental/rental.service';
import { RentalModule } from './rental/rental.module';
import { CustomerModule } from './customer/customer.module';
import { FilmModule } from './film/film.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [RentalModule, CustomerModule, FilmModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, RentalService],
})
export class AppModule {}