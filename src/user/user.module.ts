/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-13 15:57:58
 * @LastEditTime: 2022-10-13 17:02:49
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CatsController } from '../cats/cats.controller';
// import { CatsService } from '../cats/cats.service';
import { User } from '../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  // controllers: [CatsController],
  // providers: [CatsService],
})
export class UsersModule {}
