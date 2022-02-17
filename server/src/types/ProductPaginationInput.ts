import { Field, InputType } from 'type-graphql'

@InputType()
export class ProductPaginationInput {
	@Field()
	skip: number

	@Field()
	take: number
}
