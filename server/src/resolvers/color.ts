import { Color } from './../entities/Color';
import { Query, Resolver } from 'type-graphql'

@Resolver()
export class ColorResolver {
	@Query((_return) => [Color])
	async colorAll(): Promise<Color[] | undefined> {
		return await Color.find()
	}
}
