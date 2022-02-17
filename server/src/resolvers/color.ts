import { ColorByIdsInput } from './../types/ColorByIdsInput'
import { Color } from './../entities/Color'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class ColorResolver {
	@Query((_return) => [Color])
	async colorAll(): Promise<Color[] | undefined> {
		return await Color.find()
	}

	@Query((_return) => [Color])
	async colorByIds(
		@Arg('colorByIdsInput') { colorIds }: ColorByIdsInput,
	): Promise<Color[] | undefined> {
		return await Color.findByIds(colorIds)
	}
}
