import { Field, InputType } from 'type-graphql'

@InputType()
export class BrandByIdsInput {
	@Field((_type) => [Number])
	brandIds: number[]
}
