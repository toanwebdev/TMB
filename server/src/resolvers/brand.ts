import { Arg, Query, Resolver } from 'type-graphql'
import { BrandByIdsInput } from '../types/brandByIdsInput'
import { Brand } from './../entities/Brand'

@Resolver()
export class BrandResolver {
	@Query((_return) => [Brand])
	async brandByIds(
		@Arg('brandByIdsInput') { brandIds }: BrandByIdsInput,
	): Promise<Brand[] | undefined> {
		let brands: Array<Brand> = []
		for (let i = 0; i < brandIds.length; i++) {
			brands = [...brands, (await Brand.findOne({ id: brandIds[i] })) as Brand]
		}
		return brands
	}
}
