/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-08 10:59:39
 * @LastEditTime: 2022-10-13 17:06:23
 */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { DogsService } from './dogs/dogs.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { User } from './entity/user.entity';
// import { DataSource } from 'typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'zhengqi',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, DogsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
