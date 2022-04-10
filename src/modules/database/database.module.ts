import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bixxusnest',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {
  constructor(private connection: Connection) {}
}
