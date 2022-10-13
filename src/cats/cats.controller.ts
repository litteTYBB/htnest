/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-08 14:48:58
 * @LastEditTime: 2022-10-13 17:11:07
 */
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('findAll')
  async findAll() {
    console.log('findAll');
    return await this.catsService.findAll();
    // return 'hellow gtm';
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('add')
  async add() {
    console.log('add');
    return await this.catsService.add();
  }
}
