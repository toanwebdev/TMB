import { MaxLength } from 'class-validator'
import { Field, ID, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Product } from './Product'
import { Product_Image } from './Product_Image'

@ObjectType()
@Entity()
export class Color extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	name!: string

	@ManyToOne((_to) => Product, (product) => product.colors)
	product!: Product

	@OneToMany((_to) => Product_Image, (product_image) => product_image.color)
	product_images: Product_Image[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
