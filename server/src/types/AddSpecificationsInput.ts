import { Specis } from './Specis'
import { Field, InputType } from 'type-graphql'

@InputType()
export class AddSpecificationsInput {
	@Field()
	productId: number

	@Field((_type) => [Specis])
	specis: Specis[]
}
