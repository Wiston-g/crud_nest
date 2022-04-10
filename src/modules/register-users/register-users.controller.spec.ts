import { Test, TestingModule } from '@nestjs/testing';
import { RegisterUsersController } from './register-users.controller';
import { RegisterUsersService } from './register-users.service';

describe('RegisterUsersController', () => {
  let controller: RegisterUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterUsersController],
      providers: [RegisterUsersService],
    }).compile();

    controller = module.get<RegisterUsersController>(RegisterUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
