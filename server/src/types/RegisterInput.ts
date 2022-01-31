import { Field, InputType } from 'type-graphql'

@InputType()
export class RegisterInput {
	@Field()
	last_name: string

	@Field()
	first_name: string

	@Field()
	username: string

	@Field()
	email: string

	@Field()
	gender: string

	@Field()
	password: string
}
