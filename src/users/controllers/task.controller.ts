import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/tasks.dto';
import { UpdateCustomerDto } from '../dtos/customer.dto';

@Controller('task')
export class TaskController {
  constructor(private taskServvice: TaskService) {}

  @Get()
  getAll() {
    return this.taskServvice.getTasks();
  }

  @Post()
  create(@Body() payload: CreateTaskDto) {
    return this.taskServvice.create(payload);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: UpdateTaskDto) {
    return this.taskServvice.update(id, payload);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskServvice.delete(id);
  }
}
