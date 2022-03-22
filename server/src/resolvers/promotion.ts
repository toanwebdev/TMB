import { Arg, Mutation, Resolver } from 'type-graphql'
import { Promotion } from './../entities/Promotion'
import { AddOrEditPromotionInput } from '../types/AddOrEditPromotionInput'

@Resolver()
export class PromotionResolver {
	@Mutation((_return) => String)
	async addOrEditPromotion(
		@Arg('addOrEditPromotionInput')
		{ productId, contents }: AddOrEditPromotionInput,
	): Promise<string | null> {
		try {
			for (let i = 0; i < contents.length; i++) {
				const promotion = await Promotion.findOne({ productId })
				if (!promotion) {
					const newPromotion = Promotion.create({
						content: contents[i],
						productId,
					})
					await newPromotion.save()
				} else {
					promotion.content = contents[i]
					await promotion.save()
				}
			}
			return 'successfully'
		} catch (error) {
			console.log(error)
			return 'error'
		}
	}
}
