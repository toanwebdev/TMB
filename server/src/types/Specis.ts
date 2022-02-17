import { Field, InputType } from 'type-graphql'

@InputType()
export class Specis {
	@Field()
	name: string

	@Field()
	content: string
}
