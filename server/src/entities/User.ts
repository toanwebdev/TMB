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
import { Product } from './Product'
import { Province } from './Province'
import { User_Role } from './User_Role'
import { Village } from './Village'

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ length: 45 })
	@MaxLength(45)
	last_name!: string

	@Field()
	@Column({ length: 45 })
	@MaxLength(45)
	first_name!: string

	@Field()
	@Column({ unique: true, length: 45 })
	@MaxLength(45)
	username!: string

	@Field()
	@Column({ unique: true, length: 100 })
	@MaxLength(100)
	email!: string

	@Field()
	@Column()
	@MaxLength(45)
	gender!: string

	@Field({ nullable: true })
	@Column({ nullable: true, length: 100 })
	@MaxLength(100)
	avatar: string

	@Field({ nullable: true })
	@Column({ nullable: true, length: 20 })
	@MaxLength(20)
	phone_num: string

	@Column({ length: 100 })
	@MaxLength(100)
	password!: string

	@Column({ default: 1 })
	status!: number

	@OneToMany((_to) => User_Role, (user_role) => user_role.user)
	user_roles: User_Role[]

	@OneToMany(
		(_to) => Product,
		(product_created) => product_created.user_created,
	)
	product_createds: Product[]

	@OneToMany(
		(_to) => Product,
		(product_updated) => product_updated.user_updated,
	)
	product_updateds: Product[]

	@Field({ nullable: true })
	@Column({ nullable: true })
	provinceId: number

	@ManyToOne((_to) => Province, (province) => province.users)
	province!: Province

	@Field({ nullable: true })
	@Column({ nullable: true })
	districtId: number

	@ManyToOne((_to) => District, (district) => district.users)
	district!: District

	@Field({ nullable: true })
	@Column({ nullable: true })
	villageId: number

	@ManyToOne((_to) => Village, (village) => village.users)
	village!: Village

	@Field({ nullable: true })
	@Column({ nullable: true, length: 100 })
	@MaxLength(100)
	street: string

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
