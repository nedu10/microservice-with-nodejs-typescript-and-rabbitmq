"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(service, client) {
        this.service = service;
        this.client = client;
    }
    async all() {
        return this.service.all();
    }
    async create(title, image) {
        const new_product = await this.service.create({ title, image });
        await this.client.emit('create_product', new_product.create_product);
        return new_product;
    }
    async getOne(id) {
        return this.service.getOne(id);
    }
    async delete(id) {
        const delete_product = this.service.delete(id);
        await this.client.emit('delete_product', id);
        return delete_product;
    }
    async update(id, title, image) {
        const product_update = await this.service.update(id, { title, image });
        const get_product = await this.service.getOne(id);
        await this.client.emit('update_product', get_product);
        return product_update;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "all", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('title')), __param(1, common_1.Body('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('title')),
    __param(2, common_1.Body('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
ProductController = __decorate([
    common_1.Controller('products'),
    __param(1, common_1.Inject('PRODUCT_SERVICE')),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        microservices_1.ClientProxy])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map