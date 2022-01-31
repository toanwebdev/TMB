import { Field, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Category } from './Category'
import { Product } from './Product'

@ObjectType()
@Entity()
export class Category_Product extends BaseEntity {
	@PrimaryColumn()
	category_id!: number

	@ManyToOne((_to) => Category, (category) => category.category_products)
	category!: Category

	@PrimaryColumn()
	product_id!: number

	@ManyToOne((_to) => Product, (product) => product.category_products)
	product!: Product

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
