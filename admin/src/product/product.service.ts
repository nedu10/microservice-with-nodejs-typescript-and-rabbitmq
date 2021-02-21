import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    const get_product = await this.productRepo.find();
    return get_product;
  }
  async create({ title, image }): Promise<any> {
    const create_product = await this.productRepo.save({ title, image });
    return {
      status: 'Success',
      message: 'Successfully created product',
      create_product,
    };
  }
  async getOne(id: number): Promise<Product> {
    const get_product = await this.productRepo.findOne(id);
    return get_product;
  }
  async delete(id: number): Promise<object> {
    await this.productRepo.delete(id);
    return { status: 'Success' };
  }
  async update(id: number, { title, image }): Promise<object> {
    const update_product = await this.productRepo.update(id, {
      title: title,
      image: image,
    });
    return update_product;
  }
}
