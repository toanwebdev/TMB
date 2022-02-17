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
import { Category } from './Category'
import { Order_Product } from './Order_Product'
import { Product_Color } from './Product_Color'
import { Product_Image } from './Product_Image'
import { Promotion } from './Promotion'
import { Specifications } from './Specifications'
import { User } from './User'

@ObjectType()
@Entity()
export class Product extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 200 })
	@MaxLength(200)
	name!: string

	@Field({ nullable: true })
	@Column({ nullable: true, length: 200 })
	@MaxLength(200)
	slug: string

	@Field()
	@Column({ default: 'no-image.jpg', length: 200 })
	@MaxLength(200)
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
	gift: number

	@Field()
	@Column({ default: 0 })
	quantity!: number

	@OneToMany((_to) => Order_Product, (order_product) => order_product.product)
	order_products: Order_Product[]

	@Field()
	@Column()
	userCreatedId!: number

	@Field((_type) => User, { nullable: true })
	@ManyToOne((_to) => User, (user_created) => user_created.product_createds)
	user_created!: User

	@Field()
	@Column()
	userUpdatedId!: number

	@Field((_type) => User, { nullable: true })
	@ManyToOne((_to) => User, (user_updated) => user_updated.product_updateds)
	user_updated!: User

	@Field()
	@Column()
	brandId!: number

	@Field((_type) => Brand, { nullable: true })
	@ManyToOne((_to) => Brand, (brand) => brand.products)
	brand!: Brand

	@Field()
	@Column()
	categoryId!: number

	@Field((_type) => Category, { nullable: true })
	@ManyToOne((_to) => Category, (category) => category.products)
	category!: Category

	@Field((_type) => [Product_Color], { nullable: true })
	@OneToMany((_to) => Product_Color, (product_color) => product_color.product)
	product_colors: Product_Color[]

	@Field((_type) => [Product_Image], { nullable: true })
	@OneToMany((_to) => Product_Image, (product_image) => product_image.product)
	product_images: Product_Image[]

	@Field((_type) => [Specifications], { nullable: true })
	@OneToMany(
		(_to) => Specifications,
		(specifications) => specifications.product,
	)
	specificationses: Specifications[]

	@Field((_type) => [Promotion], { nullable: true })
	@OneToMany((_to) => Promotion, (promotion) => promotion.product)
	promotions: Promotion[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
