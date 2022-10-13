/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-09 14:29:54
 * @LastEditTime: 2022-10-13 09:30:12
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    // console.log('req:', req);
    next();
  }
}
