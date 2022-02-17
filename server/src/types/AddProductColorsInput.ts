import { Field, InputType } from 'type-graphql'

@InputType()
export class AddProductColorsInput {
	@Field()
	productId: number

	@Field((_type) => [Number])
	colorIds: number[]
}
