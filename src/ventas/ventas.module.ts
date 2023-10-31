import { Module } from '@nestjs/common';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entities';
import { CategoryEntity } from './category.entities';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductEntity, CategoryEntity])
  ],
  controllers: [VentasController],
  providers: [VentasService]
})
export class VentasModule {}
