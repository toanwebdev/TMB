import { Arg, Mutation, Resolver } from 'type-graphql'
import { Product_Color } from './../entities/Product_Color'
import { AddOrEditProductColorsInput } from './../types/AddOrEditProductColorsInput'

@Resolver()
export class ProductColorResolver {
	@Mutation((_return) => String)
	async addOrEditProductColors(
		@Arg('addOrEditProductColorsInput')
		{ productId, colorIds }: AddOrEditProductColorsInput,
	): Promise<string | null> {
		try {
			await Product_Color.delete({ productId })

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
