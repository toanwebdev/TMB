import { Field, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Brand } from './Brand'
import { Category } from './Category'

@ObjectType()
@Entity()
export class Brand_Category extends BaseEntity {
	@Field()
	@PrimaryColumn()
	brandId!: number

	@ManyToOne((_to) => Brand, (brand) => brand.brand_categories)
	brand!: Brand

	@Field()
	@PrimaryColumn()
	categoryId!: number

	@ManyToOne((_to) => Category, (category) => category.brand_categories)
	category!: Category

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
