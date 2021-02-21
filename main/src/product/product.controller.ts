import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  async all() {
    return await this.service.all();
  }

  @EventPattern('create_product')
  async create_product(data: Product) {
    return await this.service.create(data);
  }
  @EventPattern('update_product')
  async update_product(data: Product) {
    // console.log(data);

    const get_data = await this.service.get_one(data.id);
    return await this.service.update(data.id, data);
  }

  @EventPattern('delete_product')
  async delete_product(data: number) {
    await this.service.delete(data);
    return { state: 'successs' };
  }
}
