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
import { District } from './District'
import { Order } from './Order'
import { User } from './User'

@ObjectType()
@Entity()
export class Village extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	name!: string

	@Field()
	@Column()
	districtId!: number

	@ManyToOne((_to) => District, (district) => district.villages)
	district!: District

	@OneToMany((_to) => User, (user) => user.village)
	users: User[]

	@OneToMany((_to) => Order, (order) => order.village)
	orders: Order[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
