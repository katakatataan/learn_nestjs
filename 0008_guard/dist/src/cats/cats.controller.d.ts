import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<CreateCatDto>;
    findAll(): Promise<Cat[]>;
    findOne(id: number): Promise<number>;
    findOne2(id: number): Promise<number>;
}
