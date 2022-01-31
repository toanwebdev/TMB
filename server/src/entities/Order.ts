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
import { Order_Product } from './Order_Product'
import { Province } from './Province'
import { Village } from './Village'

@ObjectType()
@Entity()
export class Order extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	last_name!: string

	@Field()
	@Column({ length: 60 })
	@MaxLength(60)
	first_name!: string

	@Field()
	@Column({ length: 20 })
	@MaxLength(20)
	phone_num!: string

	@Field({ nullable: true })
	@Column({ nullable: true, length: 100 })
	@MaxLength(100)
	email: string

	@ManyToOne((_to) => Province, (province) => province.orders)
	province!: Province

	@ManyToOne((_to) => District, (district) => district.orders)
	district!: District

	@ManyToOne((_to) => Village, (village) => village.orders)
	village!: Village

	@Field({ nullable: true })
	@Column({ nullable: true, length: 100 })
	@MaxLength(100)
	street: string

	@Field({ nullable: true })
	@Column({ nullable: true, length: 500 })
	@MaxLength(500)
	note: string

	@Field()
	@Column()
	ship!: number

	@Field()
	@Column()
	vat!: number

	@Field()
	@Column({ default: 'tiền mặt' })
	@MaxLength(100)
	payment!: string

	@Field()
	@Column({ default: 'Đang hoạt động' })
	@MaxLength(100)
	status!: string

	@Field({ nullable: true })
	@Column({ nullable: true, type: 'text' })
	cancellation_reason: string

	@Field()
	@Column({ default: 0 })
	total_quantity!: number

	@Field()
	@Column({ default: 0 })
	total_money!: number

	@Field()
	@Column({ default: 0 })
	into_money!: number

	@OneToMany((_to) => Order_Product, (order_product) => order_product.order)
	order_products: Order_Product[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
