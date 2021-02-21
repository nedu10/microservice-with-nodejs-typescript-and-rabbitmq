import { Product } from './product.schema';
import { ProductService } from './product.service';
export declare class ProductController {
    private service;
    constructor(service: ProductService);
    all(): Promise<Product[]>;
    create_product(data: Product): Promise<Product>;
    update_product(data: Product): Promise<any>;
    delete_product(data: number): Promise<{
        state: string;
    }>;
}
