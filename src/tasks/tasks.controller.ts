import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Task> {
    return this.tasksService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    task.id = id;
    return this.tasksService.update(task);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}
