import { BadRequestException } from '@nestjs/common';

export function validateRentalDates(startDate: Date, returnDate: Date): void {
  const duration = (returnDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24); // Durée en jours

  if (duration < 7) {
    throw new BadRequestException('The rental duration must be at least 1 week.');
  }

  if (duration > 21) {
    throw new BadRequestException('The rental duration cannot exceed 3 weeks.');
  }
}
