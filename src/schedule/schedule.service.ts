import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  // Tâche planifiée pour J-5 à 12h
  @Cron('0 12 * * *') // Tous les jours à 12h
  async sendReminderForJMinusFive() {
    console.log('Checking for rentals with return date in 5 days...');
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + 5);

    const rentals = await this.prisma.rental.findMany({
      where: {
        return_date: targetDate,
      },
      include: {
        customer: true, // Inclut les informations sur le client pour l'email
      },
    });

    for (const rental of rentals) {
      console.log(`Sending email reminder to ${rental.customer.email} for rental ${rental.rental_id}`);
      // Simuler l'envoi d'email ici
    }
  }

  // Tâche planifiée pour J-3 à 12h
  @Cron('0 12 * * *') // Tous les jours à 12h
  async sendReminderForJMinusThree() {
    console.log('Checking for rentals with return date in 3 days...');
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + 3);

    const rentals = await this.prisma.rental.findMany({
      where: {
        return_date: targetDate,
      },
      include: {
        customer: true,
      },
    });

    for (const rental of rentals) {
      console.log(`Sending email reminder to ${rental.customer.email} for rental ${rental.rental_id}`);
      // Simuler l'envoi d'email ici
    }
  }
}