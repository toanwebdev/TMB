import { Field, InputType } from 'type-graphql'

@InputType()
export class ChangeUserProfileInput {
	@Field()
	id: number

	@Field()
	last_name: string

	@Field()
	first_name: string

	@Field()
	gender: string

	@Field()
	email: string

	@Field()
	avatar: string

	@Field()
	phone_num: string

	@Field()
	provinceId: number

	@Field()
	districtId: number

	@Field()
	villageId: number

	@Field()
	street: string
}
