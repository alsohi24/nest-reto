import { Controller, Get } from '@nestjs/common';

@Controller('menu')
export class MenuController {
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
    ];
  }
}
