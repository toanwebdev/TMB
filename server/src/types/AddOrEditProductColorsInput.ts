import { Field, InputType } from 'type-graphql'

@InputType()
export class AddOrEditProductColorsInput {
	@Field()
	productId: number

	@Field((_type) => [Number])
	colorIds: number[]
}
