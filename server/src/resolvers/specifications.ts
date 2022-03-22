import { Arg, Mutation, Resolver } from 'type-graphql'
import { Specifications } from './../entities/Specifications'
import { AddOrEditSpecificationsInput } from '../types/AddOrEditSpecificationsInput'

@Resolver()
export class SpecificationsResolver {
	@Mutation((_return) => String)
	async addOrEditSpecifications(
		@Arg('addOrEditSpecificationsInput')
		{ productId, specis }: AddOrEditSpecificationsInput,
	): Promise<string | null> {
		try {
			for (let i = 0; i < specis.length; i++) {
				const speci = await Specifications.findOne({ productId })
				if (!speci) {
					const newSpecis = Specifications.create({
						name: specis[i].name,
						content: specis[i].content,
						productId,
					})
					await newSpecis.save()
				} else {
					speci.name = specis[i].name
					speci.content = specis[i].content
					await speci.save()
				}
			}
			return 'successfully'
		} catch (error) {
			console.log(error)
			return 'error'
		}
	}
}
