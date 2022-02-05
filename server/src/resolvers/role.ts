import { Role } from './../entities/Role'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class RoleResolver {
	@Query((_return) => Role)
	async roleById(@Arg('id') id: number): Promise<Role | undefined> {
		return await Role.findOne({ id })
	}

	@Query((_return) => Role)
	async roleByName(@Arg('name') name: string): Promise<Role | undefined> {
		return await Role.findOne({ name })
	}
}
