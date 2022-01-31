import { MaxLength } from 'class-validator'
import { Field, ID, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Slider } from './Slider'

@ObjectType()
@Entity()
export class Slider_Image extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ default: 'no-image.jpg', length: 100 })
	@MaxLength(100)
	link!: string

	@ManyToOne((_to) => Slider, (slider) => slider.slider_images)
	slider!: Slider

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
