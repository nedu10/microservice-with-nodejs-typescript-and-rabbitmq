import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private service: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}
  @Get()
  async all() {
    // await this.client.emit('hello', 'Hello micro service just sent a msg');
    return this.service.all();
  }

  @Post()
  async create(@Body('title') title: string, @Body('image') image: string) {
    const new_product = await this.service.create({ title, image });
    await this.client.emit('create_product', new_product.create_product);
    return new_product;
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const delete_product = this.service.delete(id);
    await this.client.emit('delete_product', id);
    return delete_product;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('image') image: string,
  ) {
    const product_update = await this.service.update(id, { title, image });

    const get_product = await this.service.getOne(id);
    // console.log(get_product);

    await this.client.emit('update_product', get_product);
    return product_update;
  }
}
