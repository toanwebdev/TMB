import { AddUserRoleInput } from './../types/AddUserRoleInput'
import { User_Role } from './../entities/User_Role'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class UserRoleResolver {
	@Query((_return) => User_Role)
	async userRole(
		@Arg('userId') userId: number,
	): Promise<User_Role | undefined> {
		return await User_Role.findOne({ userId })
	}

	@Mutation((_return) => User_Role)
	async addUserRole(
		@Arg('addUserRoleInput') { userId, roleId }: AddUserRoleInput,
	): Promise<User_Role> {
		const newUserRole = User_Role.create({
			userId,
			roleId,
		})

		await newUserRole.save()
		return newUserRole
	}
}
