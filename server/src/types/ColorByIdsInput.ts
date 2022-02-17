import { Field, InputType } from 'type-graphql'

@InputType()
export class ColorByIdsInput {
	@Field((_type) => [Number])
	colorIds: number[]
}
