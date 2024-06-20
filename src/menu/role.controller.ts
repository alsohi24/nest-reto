import { Controller, Get } from '@nestjs/common';

@Controller('role')
export class RoleController {
  @Get()
  findAll() {
    return [
      {
        code: 'admin',
        name: 'Admin',
      },
      {
        code: 'manager',
        name: 'Manager',
      },
      {
        code: 'user',
        name: 'User',
      },
    ];
  }
}
