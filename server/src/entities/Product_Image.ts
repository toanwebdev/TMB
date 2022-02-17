import { MaxLength } from 'class-validator'
import { Field, ID, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Color } from './Color'
import { Product } from './Product'

@ObjectType()
@Entity()
export class Product_Image extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ default: 'no-image.jpg', length: 200 })
	@MaxLength(200)
	link!: string

	@Field()
	@Column()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.product_images)
	product!: Product

	@Field()
	@Column()
	colorId!: number

	@ManyToOne((_to) => Color, (color) => color.product_images)
	color!: Color

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
