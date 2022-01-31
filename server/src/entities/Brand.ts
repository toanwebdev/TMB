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
import { Product } from './Product'

@ObjectType()
@Entity()
export class Brand extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column()
	@MaxLength(45)
	name!: string

	@Field()
	@Column({ default: 'no-image.jpg' })
	@MaxLength(100)
	logo!: string

	@OneToMany((_to) => Product, (product) => product.brand)
	products!: Product[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}