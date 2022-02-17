import { Product_Color } from './../entities/Product_Color'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { AddProductColorsInput } from './../types/AddProductColorsInput'

@Resolver()
export class ProductColorResolver {
	@Mutation((_return) => String)
	async addProductColors(
		@Arg('addProductColorsInput')
		{ productId, colorIds }: AddProductColorsInput,
	): Promise<string | null> {
		try {
			for (let i = 0; i < colorIds.length; i++) {
				const newProductColor = Product_Color.create({
					productId,
					colorId: colorIds[i],
				})
				await newProductColor.save()
			}
			return 'successfully'
		} catch (error) {
			console.log(error)
			return 'error'
		}
	}
}
