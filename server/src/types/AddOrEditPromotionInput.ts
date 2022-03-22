import { Field, InputType } from 'type-graphql'

@InputType()
export class AddOrEditPromotionInput {
	@Field((_type) => [String])
	contents: string[]

	@Field()
	productId: number
}
