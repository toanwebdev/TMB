import { ColorLinks } from './Colors'
import { Field, InputType } from 'type-graphql'

@InputType()
export class AddProductImagesInput {
	@Field()
	productId: number

	@Field((_type) => [ColorLinks])
	colorLinks: ColorLinks[]
}
