import { Arg, Query, Resolver } from 'type-graphql'
import { Brand } from './../entities/Brand'

@Resolver()
export class BrandResolver {
	@Query((_return) => [Brand])
	async brandAll(
		@Arg('categoryId') categoryId: number,
	): Promise<Brand[] | undefined> {
		return await Brand.find({ categoryId })
	}
}
