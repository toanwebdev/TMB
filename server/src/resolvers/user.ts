import { Promotion } from './../entities/Promotion'
import { Specifications } from './../entities/Specifications'
import { Product_Image } from './../entities/Product_Image'
import { Product_Color } from './../entities/Product_Color'
import { Product } from './../entities/Product'
import argon2 from 'argon2'
import {
	Arg,
	Ctx,
	FieldResolver,
	Mutation,
	Query,
	Resolver,
	Root,
} from 'type-graphql'
import { FindConditions, Like } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { COOKIE_NAME } from '../constants'
import { User } from '../entities/User'
import { TokenModel } from '../models/Token'
import { ChangeUserProfileInput } from '../types/ChangeUserProfileInput'
import { LoginInput } from '../types/LoginInput'
import { RegisterInput } from '../types/RegisterInput'
import { UserMutationResponse } from '../types/UserMutationResponse'
import { validateRegisterInput } from '../utils/validateRegisterInput'
import { ChangePasswordInput } from './../types/ChangePasswordInput'
import { Context } from './../types/Context'
import { EditPasswordInput } from './../types/EditPasswordInput'
import { ForgotPasswordInput } from './../types/ForgotPasswordInput'
import { PaginationInput } from './../types/PaginationInput'
import { sendEmail } from './../utils/sendEmail'

@Resolver((_of) => User)
export class UserResolver {
	@FieldResolver((_return) => String)
	email(@Root() { id, email }: User, @Ctx() { req }: Context) {
		return req.session.userId === id ? email : ''
	}

	@Query((_return) => User, { nullable: true })
	async me(@Ctx() { req }: Context): Promise<User | undefined | null | any> {
		if (!req.session.userId) return null
		const user = await User.findOne(req.session.userId, {
			relations: ['province', 'district', 'village'],
		})
		return user
	}

	@Query((_return) => Number)
	async userTotalRows(
		@Arg('searchTerm') searchTerm: string,
	): Promise<number | null> {
		try {
			if (searchTerm === '') {
				return await User.count()
			}
			return await User.count({ username: Like(`%${searchTerm}%`) })
		} catch (error) {
			console.log(error)
			return null
		}
	}

	@Query((_return) => [User])
	async userPagination(
		@Arg('userPaginationInput')
		{ skip, take, searchTerm }: PaginationInput,
	): Promise<User[] | undefined | null> {
		try {
			const options = {
				order: {
					updated_at: 'DESC',
				},
				skip,
				take,
				relations: ['province', 'district', 'village'],
			}

			return await User.find(
				searchTerm
					? ({
							where: { name: Like(`%${searchTerm}%`) },
							...options,
					  } as FindConditions<User>)
					: ({ ...options } as FindConditions<User>),
			)
		} catch (error) {
			console.log(error)
			return null
		}
	}

	@Mutation((_return) => UserMutationResponse)
	async register(
		@Arg('registerInput') registerInput: RegisterInput,
		@Ctx() { req }: Context,
	): Promise<UserMutationResponse> {
		const validateRegisterInputErrors = validateRegisterInput(registerInput)
		if (validateRegisterInputErrors !== null) {
			return { code: 400, success: false, ...validateRegisterInputErrors }
		}

		try {
			const { last_name, first_name, username, email, gender, password } =
				registerInput
			const existingUser = await User.findOne({
				where: [{ username }, { email }],
			})

			if (existingUser)
				return {
					code: 400,
					success: false,
					message: 'Duplicated username or email',
					errors: [
						{
							field: existingUser.username === username ? 'username' : 'email',
							message: `${
								existingUser.username === username ? 'Tên đăng nhập' : 'Email'
							} đã tồn tại.`,
						},
					],
				}

			const hashedPassword = await argon2.hash(password)

			const newUser = User.create({
				last_name,
				first_name,
				username,
				password: hashedPassword,
				email,
				gender,
			})

			await newUser.save()

			// Create session and return cookie
			req.session.userId = newUser.id

			return {
				code: 200,
				success: true,
				message: 'User registration successful',
				user: newUser,
			}
		} catch (error) {
			console.log(error)
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			}
		}
	}

	@Mutation((_return) => UserMutationResponse)
	async login(
		@Arg('loginInput') { username, password }: LoginInput,
		@Ctx() { req }: Context,
	): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne({ username })

			if (!existingUser) {
				return {
					code: 400,
					success: false,
					message: 'User not found',
					errors: [
						{
							field: 'username',
							message: 'Tên đăng nhập hoặc mật khẩu không đúng.',
						},
					],
				}
			}

			const passwordValid = await argon2.verify(existingUser.password, password)

			if (!passwordValid) {
				return {
					code: 400,
					success: false,
					message: 'Wrong username or password',
					errors: [
						{
							field: 'password',
							message: 'Tên đăng nhập hoặc mật khẩu không đúng.',
						},
					],
				}
			}

			// Create session and return cookie
			req.session.userId = existingUser.id

			return {
				code: 200,
				success: true,
				message: 'Logged in successfully',
				user: existingUser,
			}
		} catch (error) {
			console.log(error)
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			}
		}
	}

	@Mutation((_return) => Boolean)
	logout(@Ctx() { req, res }: Context): Promise<boolean> {
		return new Promise((resolve, _reject) => {
			res.clearCookie(COOKIE_NAME)

			req.session.destroy((err) => {
				if (err) {
					console.log('DESTROYING SESSION ERROR', err)
					resolve(false)
				}
				resolve(true)
			})
		})
	}

	@Mutation((_return) => Boolean)
	async forgotPassword(
		@Arg('forgotPasswordInput') { email }: ForgotPasswordInput,
	): Promise<boolean> {
		const user = await User.findOne({ email })

		if (!user) return true

		await TokenModel.findOneAndDelete({ userId: user.id })

		const resetToken = uuidv4()
		const hashedResetToken = await argon2.hash(resetToken)

		// save token to db
		await new TokenModel({ userId: user.id, token: hashedResetToken }).save()

		// send reset password link to user via email
		await sendEmail(
			email,
			`<a href="http://localhost:3000/dat-lai-mat-khau?token=${resetToken}&userId=${user.id}">Click here to reset your password</a>`,
		)

		return true
	}

	@Mutation((_return) => UserMutationResponse)
	async changePassword(
		@Arg('userId') userId: number,
		@Arg('token') token: string,
		@Arg('changePasswordInput') { newPassword }: ChangePasswordInput,
		@Ctx() { req }: Context,
	): Promise<UserMutationResponse> {
		if (newPassword.length <= 6) {
			return {
				code: 400,
				success: false,
				message: 'Invalid password',
				errors: [
					{
						field: 'newPassword',
						message: 'Độ dài phải lớn hơn 6 ký tự.',
					},
				],
			}
		}

		try {
			const resetPasswordToken = await TokenModel.findOne({ userId })
			if (!resetPasswordToken) {
				return {
					code: 400,
					success: false,
					message: 'Invalid or expired password reset token',
					errors: [
						{
							field: 'token',
							message: 'Token đặt lại mật khẩu không hợp lệ hoặc hết hạn.',
						},
					],
				}
			}

			const resetPasswordTokenValid = await argon2.verify(
				resetPasswordToken.token,
				token,
			)

			if (!resetPasswordTokenValid) {
				return {
					code: 400,
					success: false,
					message: 'Invalid or expired password reset token',
					errors: [
						{
							field: 'token',
							message: 'Token đặt lại mật khẩu không hợp lệ hoặc hết hạn.',
						},
					],
				}
			}

			const user = await User.findOne(userId)

			if (!user) {
				return {
					code: 400,
					success: false,
					message: 'User no longer exists',
					errors: [
						{
							field: 'token',
							message: 'Người dùng không còn tồn tại',
						},
					],
				}
			}

			const updatedPassword = await argon2.hash(newPassword)
			await User.update({ id: userId }, { password: updatedPassword })

			await resetPasswordToken.deleteOne()

			req.session.userId = user.id

			return {
				code: 200,
				success: true,
				message: 'User password reset successfully',
				user,
			}
		} catch (error) {
			console.log(error)
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			}
		}
	}

	@Mutation((_return) => UserMutationResponse)
	async changeUserProfile(
		@Arg('changeUserProfileInput')
		{
			id,
			provinceId,
			districtId,
			villageId,
			street,
			...changeUser
		}: ChangeUserProfileInput,
	): Promise<UserMutationResponse> {
		try {
			const user = await User.findOne({ id })

			if (!user) {
				return {
					code: 400,
					success: false,
					message: 'User no longer exists',
					errors: [
						{
							field: 'token',
							message: 'Người dùng không còn tồn tại',
						},
					],
				}
			}

			if (provinceId === -1) {
				await User.update(id, { ...changeUser })
			} else {
				await User.update(id, {
					provinceId,
					districtId,
					villageId,
					street,
					...changeUser,
				})
			}

			const userUpdated = await User.findOne(
				{ id },
				{ relations: ['province', 'district', 'village'] },
			)

			return {
				code: 200,
				success: true,
				message: 'Change avatar successfully',
				user: userUpdated,
			}
		} catch (error) {
			console.log(error)
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			}
		}
	}

	@Mutation((_return) => UserMutationResponse)
	async editPassword(
		@Arg('editPasswordInput')
		{ id, password, new_password }: EditPasswordInput,
	): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne({ id })

			if (!existingUser) {
				return {
					code: 400,
					success: false,
					message: 'User not found',
					errors: [
						{
							field: 'token',
							message: 'Người dùng không còn tồn tại',
						},
					],
				}
			}

			const passwordValid = await argon2.verify(existingUser.password, password)

			if (!passwordValid) {
				return {
					code: 400,
					success: false,
					message: 'Wrong password',
					errors: [
						{
							field: 'password',
							message: 'Mật khẩu không đúng.',
						},
					],
				}
			}

			existingUser.password = await argon2.hash(new_password)
			await existingUser.save()

			return {
				code: 200,
				success: true,
				message: 'edit password in successfully',
				user: existingUser,
			}
		} catch (error) {
			console.log(error)
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			}
		}
	}

	@Mutation((_return) => String)
	async delUser(@Arg('id') id: number): Promise<string> {
		const products = await Product.find({
			where: [{ userCreatedId: id }, { userUpdatedId: id }],
		})

		for (let i = 0; i < products.length; i++) {
			await Product_Color.delete({
				productId: products[i].id,
			})
			await Product_Image.delete({
				productId: products[i].id,
			})
			await Specifications.delete({
				productId: products[i].id,
			})
			await Promotion.delete({ productId: products[i].id })
			await Product.delete({ id: products[i].id })
		}

		await User.delete(id)
		return 'successfully'
	}
}
