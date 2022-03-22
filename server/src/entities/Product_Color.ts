import { Field, ID, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Color } from './Color'
import { Product } from './Product'

@ObjectType()
@Entity()
export class Product_Color extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column()
	colorId!: number

	@ManyToOne((_to) => Color, (color) => color.product_colors)
	color!: Color

	@Field()
	@Column()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.product_colors)
	product!: Product
}
