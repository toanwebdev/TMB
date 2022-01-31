import { Village } from '../entities/Village'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class VillageResolver {
	@Query((_return) => [Village])
	async villageAll(
		@Arg('districtId') districtId: number,
	): Promise<Village[] | undefined> {
		return await Village.find({ districtId })
	}

	@Query((_return) => Village)
	async village(
		@Arg('villageId') villageId: number,
	): Promise<Village | undefined> {
		return await Village.findOne({ id: villageId })
	}
}
