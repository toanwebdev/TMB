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
	UpdateDateColumn
} from 'typeorm'
import { Order } from './Order'
import { Province } from './Province'
import { User } from './User'
import { Village } from './Village'

@ObjectType()
@Entity()
export class District extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	name!: string

	@Field()
	@Column()
	provinceId!: number

	@ManyToOne((_to) => Province, (province) => province.districts)
	province!: Province

	@OneToMany((_to) => Village, (village) => village.district)
	villages: Village[]

	@OneToMany((_to) => User, (user) => user.district)
	users: User[]

	@OneToMany((_to) => Order, (order) => order.district)
	orders: Order[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
