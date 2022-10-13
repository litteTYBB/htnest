/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-08 16:00:39
 * @LastEditTime: 2022-10-13 16:38:57
 */
import { Injectable } from '@nestjs/common';
// import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  // constructor(private sequelize: Sequelize) {}
  getHello(): string {
    return 'Hello World!';
  }
}
