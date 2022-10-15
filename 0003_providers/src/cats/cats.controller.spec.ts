import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './Cats.service';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const Cats: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsController = Cats.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(catsController.getHello()).toBe('Hello World!');
    });
  });
});
