import { Arg, Query, Resolver } from 'type-graphql'
import { Village } from '../entities/Village'

@Resolver()
export class VillageResolver {
	@Query((_return) => [Village])
	async villageAll(
		@Arg('districtId') districtId: number,
	): Promise<Village[] | undefined> {
		return await Village.find({ districtId })
	}
}
