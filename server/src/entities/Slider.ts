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
import { Slider_Image } from './Slider_Image'

@ObjectType()
@Entity()
export class Slider extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field({ nullable: true })
	@Column({ nullable: true, length: 100 })
	@MaxLength(100)
	name: string

	@Field({ nullable: true })
	@Column({ nullable: true, length: 100 })
	@MaxLength(100)
	link: string

	@OneToMany((_to) => Slider_Image, (slider_image) => slider_image.slider)
	slider_images: Slider_Image[]

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
