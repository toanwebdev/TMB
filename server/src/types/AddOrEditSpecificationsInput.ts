import { Specis } from './Specis'
import { Field, InputType } from 'type-graphql'

@InputType()
export class AddOrEditSpecificationsInput {
	@Field()
	productId: number

	@Field((_type) => [Specis])
	specis: Specis[]
}
