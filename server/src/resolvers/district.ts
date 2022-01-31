import { District } from './../entities/District'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class DistrictResolver {
	@Query((_return) => [District])
	async districtAll(
		@Arg('provinceId') provinceId: number,
	): Promise<District[] | undefined> {
		return await District.find({ provinceId })
	}

	@Query((_return) => District)
	async district(
		@Arg('districtId') districtId: number,
	): Promise<District | undefined> {
		return await District.findOne({ id: districtId })
	}
}
