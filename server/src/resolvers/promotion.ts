import { AddPromotionInput } from './../types/AddPromotionInput'
import { Promotion } from './../entities/Promotion'
import { Arg, Mutation, Resolver } from 'type-graphql'

@Resolver()
export class PromotionResolver {
	@Mutation((_return) => String)
	async addPromotion(
		@Arg('addPromotionInput')
		{ productId, contents }: AddPromotionInput,
	): Promise<string | null> {
		try {
			for (let i = 0; i < contents.length; i++) {
				const newPromotion = Promotion.create({
					content: contents[i],
					productId,
				})
				await newPromotion.save()
			}
			return 'successfully'
		} catch (error) {
			console.log(error)
			return 'error'
		}
	}
}
