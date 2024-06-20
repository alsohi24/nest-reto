import { Controller, Get } from '@nestjs/common';

@Controller('roleaccess')
export class RoleaccessController {
  @Get()
  findAll() {
    return [
      {
        role: 'admin',
        menu: 'task',
      },
      {
        role: 'admin',
        menu: 'associate',
      },
      {
        role: 'admin',
        menu: 'customer',
      },
      {
        role: 'admin',
        menu: 'user',
      },
    ];
  }
}
