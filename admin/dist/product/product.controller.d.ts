import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';
export declare class ProductController {
    private service;
    private readonly client;
    constructor(service: ProductService, client: ClientProxy);
    all(): Promise<import("./product.entity").Product[]>;
    create(title: string, image: string): Promise<any>;
    getOne(id: number): Promise<import("./product.entity").Product>;
    delete(id: number): Promise<object>;
    update(id: number, title: string, image: string): Promise<object>;
}
