import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

@Injectable()
export class AppService {
  getHello(): string {
    return '남주현';
  }
}

const prisma = new PrismaClient();
