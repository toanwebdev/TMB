import { Field, InputType } from 'type-graphql'

@InputType()
export class PaginationInput {
	@Field()
	skip: number

	@Field()
	take: number

	@Field()
	searchTerm: string
}
