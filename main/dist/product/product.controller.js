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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const product_schema_1 = require("./product.schema");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(service) {
        this.service = service;
    }
    async all() {
        return await this.service.all();
    }
    async create_product(data) {
        return await this.service.create(data);
    }
    async update_product(data) {
        const get_data = await this.service.get_one(data.id);
        return await this.service.update(data.id, data);
    }
    async delete_product(data) {
        await this.service.delete(data);
        return { state: 'successs' };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "all", null);
__decorate([
    microservices_1.EventPattern('create_product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_schema_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create_product", null);
__decorate([
    microservices_1.EventPattern('update_product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_schema_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update_product", null);
__decorate([
    microservices_1.EventPattern('delete_product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete_product", null);
ProductController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map