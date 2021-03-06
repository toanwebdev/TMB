import { Field, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Role } from './Role'
import { User } from './User'

@ObjectType()
@Entity()
export class User_Role extends BaseEntity {
	@Field()
	@PrimaryColumn()
	userId!: number

	@ManyToOne((_to) => User, (user) => user.user_roles)
	user!: User

	@Field()
	@PrimaryColumn()
	roleId!: number

	@ManyToOne((_to) => Role, (role) => role.user_roles)
	role!: Role

	@Field()
	@CreateDateColumn()
	created_at: Date

	@Field()
	@UpdateDateColumn()
	updated_at: Date
}
