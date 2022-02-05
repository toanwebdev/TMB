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
import { Brand } from './Brand'
import { Category_Product } from './Category_Product'
import { Order_Product } from './Order_Product'
import { Product_Color } from './Product_Color'
import { Product_Image } from './Product_Image'
import { User } from './User'

@ObjectType()
@Entity()
export class Product extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 150 })
	@MaxLength(150)
	name!: string

	@Field({ nullable: true })
	@Column({ nullable: true, length: 150 })
	@MaxLength(150)
	slug: string

	@Field()
	@Column({ default: 'no-image.jpg', length: 100 })
	@MaxLength(100)
	avatar!: string

	@Field({ nullable: true })
	@Column({ nullable: true, type: 'longtext' })
	description: string

	@Field()
	@Column({ default: false })
	installment!: boolean

	@Field()
	@Column({ default: false })
	best_sell!: boolean

	@Field()
	@Column({ default: false })
	highlight!: boolean

	@Field()
	@Column({ default: false })
	new!: boolean

	@Field()
	@Column()
	price_input!: number

	@Field({ nullable: true })
	@Column({ nullable: true })
	discount: number

	@Field()
	@Column()
	price!: number

	@Field({ nullable: true })
	@Column({ nullable: true })
	rating: number

	@Field({ nullable: true })
	@Column({ nullable: true })
	assessor_num: number

	@Field({ nullable: true })
	@Column({ nullable: true })
	gift: number

	@OneToMany((_to) => Order_Product, (order_product) => order_product.product)
	order_products: Order_Product[]

	@ManyToOne((_to) => User, (user_created) => user_created.product_createds)
	user_created!: User

	@ManyToOne((_to) => User, (user_updated) => user_updated.product_updateds)
	user_updated!: User

	@ManyToOne((_to) => Brand, (brand) => brand.products)
	brand!: Brand

	@OneToMany(
		(_to) => Category_Product,
		(category_product) => category_product.product,
	)
	category_products: Category_Product[]

	@OneToMany((_to) => Product_Color, (product_color) => product_color.product)
	product_colors: Product_Color[]

	@OneToMany((_to) => Product_Image, (product_image) => product_image.product)
	product_images: Product_Image[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
