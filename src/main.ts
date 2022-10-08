/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-08 10:59:39
 * @LastEditTime: 2022-10-08 14:45:55
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(3000);
}
bootstrap();
