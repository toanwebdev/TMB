import { AddProductImagesInput } from './../types/AddProductImagesInput'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { Product_Image } from './../entities/Product_Image'

@Resolver()
export class ProductImageResolver {
	@Mutation((_return) => String)
	async addProductImages(
		@Arg('addProductImagesInput')
		{ productId, colorLinks }: AddProductImagesInput,
	): Promise<string | null> {
		try {
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
