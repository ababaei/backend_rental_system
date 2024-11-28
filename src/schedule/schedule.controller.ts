import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('tasks')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

//   @Get()
//   findAll() {
//     return this.scheduleService.findAll();
//   }
}