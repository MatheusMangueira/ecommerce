import { IsNotEmpty, MinLength, IsInt, Min } from 'class-validator';
import { Entity, Column, Unique, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CategoryModel } from '../category/categoryModel';

@Entity('product')
@Unique(['name'])
export class ProductModel {
  @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => CategoryModel, category => category.product)
    @JoinColumn({ name: 'category_id' })
      category: CategoryModel;
    

  @Column()
    name: string;

  @Column('int')
    stock: number;

  @Column('decimal')
    price: number;

  @Column()
    description: string;

  @Column()
    productImage: string;

}
