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
import { Category_Product } from './Category_Product'

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

	@Field({ nullable: true })
	@Column({ nullable: true, length: 60 })
	@MaxLength(60)
	slug: string

	@OneToMany(
		(_to) => Category_Product,
		(category_product) => category_product.category,
	)
	category_products!: Category_Product[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
