import { Field, InputType } from 'type-graphql'

@InputType()
export class EditPasswordInput {
	@Field()
	id: number

	@Field()
	password: string

	@Field()
	new_password: string
}
