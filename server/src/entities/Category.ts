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
import { Brand_Category } from './Brand_Category'
import { Product } from './Product'

@ObjectType()
@Entity()
export class Category extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	name!: string

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	slug!: string

	@OneToMany((_to) => Product, (product) => product.category)
	products!: Product[]

	@OneToMany(
		(_to) => Brand_Category,
		(brand_category) => brand_category.category,
	)
	brand_categories!: Brand_Category[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
