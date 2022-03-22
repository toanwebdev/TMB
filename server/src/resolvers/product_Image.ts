import { Arg, Mutation, Resolver } from 'type-graphql'
import { Product_Image } from './../entities/Product_Image'
import { AddOrEditProductImagesInput } from './../types/AddOrEditProductImagesInput'

@Resolver()
export class ProductImageResolver {
	@Mutation((_return) => String)
	async addOrEditProductImages(
		@Arg('addOrEditProductImagesInput')
		{ productId, colorLinks }: AddOrEditProductImagesInput,
	): Promise<string | null> {
		try {
			await Product_Image.delete({ productId })

			for (let i = 0; i < colorLinks.length; i++) {
				for (let j = 0; j < colorLinks[i].links.length; j++) {
					const newProductImage = Product_Image.create({
						link: colorLinks[i].links[j],
						productId,
						colorId: colorLinks[i].id,
					})
					await newProductImage.save()
				}
			}
			return 'successfully'
		} catch (error) {
			console.log(error)
			return 'error'
		}
	}
}
