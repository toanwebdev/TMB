import { Field, InputType } from 'type-graphql'

@InputType()
export class ColorLinks {
	@Field()
	id: number

	@Field((_type) => [String])
	links: string[]
}
