import { Query, Resolver } from 'type-graphql'
import { Province } from '../entities/Province'

@Resolver()
export class ProvinceResolver {
	@Query((_return) => [Province])
	async provinceAll(): Promise<Province[] | undefined> {
		return await Province.find()
	}
}
