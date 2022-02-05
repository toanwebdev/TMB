import { Field, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Color } from './Color'
import { Product } from './Product'

@ObjectType()
@Entity()
export class Product_Color extends BaseEntity {
	@Field()
	@PrimaryColumn()
	colorId!: number

	@ManyToOne((_to) => Color, (color) => color.product_colors)
	color!: Color

	@Field()
	@PrimaryColumn()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.product_colors)
	product!: Product

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
