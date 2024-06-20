import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Db } from 'mongodb';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/tasks.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { UsersService } from './users.service';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('MONGO') private databaseMongo: Db,
    @InjectModel(Task.name) private taskModel: Model<Task>,
    private usersService: UsersService,
  ) {}
  getTasks() {
    const tasksCollection = this.databaseMongo.collection('tasks');
    return tasksCollection.find().toArray();
  }

  async create(data: CreateTaskDto) {
    const newModel = new this.taskModel(data);
    const model = await newModel.save();
    return model.toJSON();
  }

  async delete(taskId: string) {
    const result = await this.taskModel.findByIdAndDelete(taskId);
    if (!result) {
      throw new NotFoundException(`Task with id ${taskId} not found`);
    }
    return { message: 'Task deleted successfully' };
  }

  async update(id: string, changes: UpdateTaskDto) {
    const task = await this.taskModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!task) {
      throw new NotFoundException(`Task #${id} not found`);
    }
    return task;
  }
}
