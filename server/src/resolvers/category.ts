import { Category } from '../entities/Category'
import { Query, Resolver } from 'type-graphql'

@Resolver()
export class CategoryResolver {
	@Query((_return) => [Category])
	async categoryAll(): Promise<Category[] | undefined> {
		return await Category.find()
	}
}
