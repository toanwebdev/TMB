import { Field, InputType } from 'type-graphql'

@InputType()
export class AddPromotionInput {
	@Field((_type) => [String])
	contents: string[]

	@Field()
	productId: number
}
