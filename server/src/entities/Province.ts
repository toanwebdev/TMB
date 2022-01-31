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
import { District } from './District'
import { Order } from './Order'
import { User } from './User'

@ObjectType()
@Entity()
export class Province extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	name!: string

	@OneToMany((_to) => District, (district) => district.province)
	districts: District[]

	@OneToMany((_to) => User, (user) => user.province)
	users: User[]

	@OneToMany((_to) => Order, (order) => order.province)
	orders: Order[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
