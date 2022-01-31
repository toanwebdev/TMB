import { Arg, Query, Resolver } from 'type-graphql'
import { Province } from '../entities/Province'

@Resolver()
export class ProvinceResolver {
	@Query((_return) => [Province])
	async provinceAll(): Promise<Province[] | undefined> {
		return await Province.find()
	}

	@Query((_return) => Province)
	async province(
		@Arg('provinceId') provinceId: number,
	): Promise<Province | undefined> {
		return await Province.findOne({ id: provinceId })
	}
}
