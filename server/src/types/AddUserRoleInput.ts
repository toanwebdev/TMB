import { Field, InputType } from 'type-graphql'

@InputType()
export class AddUserRoleInput {
	@Field()
	userId: number

	@Field()
	roleId: number
}
