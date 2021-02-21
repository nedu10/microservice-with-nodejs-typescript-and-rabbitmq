import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    all(): Promise<Product[]>;
    create({ title, image }: {
        title: any;
        image: any;
    }): Promise<any>;
    getOne(id: number): Promise<Product>;
    delete(id: number): Promise<object>;
    update(id: number, { title, image }: {
        title: any;
        image: any;
    }): Promise<object>;
}
