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
import { Product } from './Product'

@ObjectType()
@Entity()
export class Promotion extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 200 })
	@MaxLength(200)
	content!: string

	@Field()
	@Column()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.promotions)
	product!: Product

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
