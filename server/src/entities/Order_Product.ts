import { Field, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Order } from './Order'
import { Product } from './Product'

@ObjectType()
@Entity()
export class Order_Product extends BaseEntity {
	@Field()
	@PrimaryColumn()
	orderId!: number

	@ManyToOne((_to) => Order, (order) => order.order_products)
	order!: Order

	@Field()
	@PrimaryColumn()
	productId!: number

	@ManyToOne((_to) => Product, (product) => product.order_products)
	product!: Product

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
