/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-08 15:38:21
 * @LastEditTime: 2022-10-13 17:09:42
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // findOne(id: string): Promise<User> {
  //   return this.usersRepository.findOne(id);
  // }
  async add() {
    const ttt = new User();
    ttt.firstName = 'zheng';
    ttt.lastName = 'zheng';
    return await this.usersRepository.save(ttt);
  }
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
