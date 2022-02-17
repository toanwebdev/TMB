import { Brand_Category } from '../entities/Brand_Category'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class BrandCategoryResolver {
	@Query((_return) => [Brand_Category])
	async brandCategories(
		@Arg('categoryId') categoryId: number,
	): Promise<Brand_Category[] | undefined> {
		return await Brand_Category.find({ categoryId })
	}
}
