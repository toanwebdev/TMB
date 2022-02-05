import { MaxLength } from 'class-validator'
import { Field, ID, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Product_Color } from './Product_Color'
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

	@OneToMany((_to) => Product_Color, (product_color) => product_color.color)
	product_colors: Product_Color[]

	@OneToMany((_to) => Product_Image, (product_image) => product_image.color)
	product_images: Product_Image[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
