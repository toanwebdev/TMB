import { Arg, Mutation, Resolver } from 'type-graphql'
import { Specifications } from './../entities/Specifications'
import { AddSpecificationsInput } from './../types/AddSpecificationsInput'

@Resolver()
export class SpecificationsResolver {
	@Mutation((_return) => String)
	async addSpecifications(
		@Arg('addSpecificationsInput')
		{ productId, specis }: AddSpecificationsInput,
	): Promise<string | null> {
		try {
			for (let i = 0; i < specis.length; i++) {
				const newSpecis = Specifications.create({
					name: specis[i].name,
					content: specis[i].content,
					productId,
				})
				await newSpecis.save()
			}
			return 'successfully'
		} catch (error) {
			console.log(error)
			return 'error'
		}
	}
}
