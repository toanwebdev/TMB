import { Product } from './Product'
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

@ObjectType()
@Entity()
export class Specifications extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	name!: string

	@Field()
	@Column({ length: 200 })
	@MaxLength(200)
	content!: string

	@Field()
	@Column()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.specificationses)
	product!: Product

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
