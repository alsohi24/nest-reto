import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer, CustomerSchema } from './entities/customer.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User, UserSchema } from './entities/user.entity';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { Task, TaskSchema } from './entities/task.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Task.name,
        schema: TaskSchema,
      },
    ]),
  ],
  controllers: [CustomerController, UsersController, TaskController],
  providers: [CustomersService, UsersService, TaskService],
  exports: [UsersService],
})
export class UsersModule {}
