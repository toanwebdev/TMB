import { Field, InputType } from 'type-graphql'

@InputType()
export class EditProductInput {
	@Field()
	id: number

	@Field()
	name: string

	@Field()
	slug: string

	@Field()
	avatar: string

	@Field()
	description: string

	@Field()
	installment: boolean

	@Field()
	best_sell: boolean

	@Field()
	highlight: boolean

	@Field()
	new: boolean

	@Field()
	price_input: number

	@Field()
	discount: number

	@Field()
	price: number

	@Field()
	gift: number

	@Field()
	quantity: number

	@Field()
	categoryId: number

	@Field()
	brandId: number

	@Field()
	userCreatedId: number

	@Field()
	userUpdatedId: number
}
