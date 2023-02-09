import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Proyecto, ProyectoSchema } from './schemas/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Proyecto.name, schema: ProyectoSchema }])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
