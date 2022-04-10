import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { LoginsController } from './modules/logins/logins.controller';
import { LoginsModule } from './modules/logins/logins.module';
import { LoginsService } from './modules/logins/logins.service';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';

@Module({
  imports: [DatabaseModule, UsersModule, LoginsModule],
  controllers: [AppController, UsersController, LoginsController],
  providers: [AppService, UsersService, LoginsService],
})
export class AppModule {}
