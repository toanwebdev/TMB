import { Product } from './../entities/Product';
import { Field, ObjectType } from 'type-graphql'
import { FieldError } from './FieldError'
import { IMutationResponse } from './MutationResponse'

@ObjectType({ implements: IMutationResponse })
export class ProductMutationResponse implements IMutationResponse {
	code: number
	success: boolean
	message?: string

	@Field({ nullable: true })
	product?: Product

	@Field((_type) => [FieldError], { nullable: true })
	errors?: FieldError[]
}
