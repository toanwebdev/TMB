import { AddOrEditProductInput } from './../types/AddOrEditProductInput'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { FindConditions, Like } from 'typeorm'
import { Product } from './../entities/Product'
import { Product_Color } from './../entities/Product_Color'
import { Product_Image } from './../entities/Product_Image'
import { Promotion } from './../entities/Promotion'
import { Specifications } from './../entities/Specifications'
import { ProductMutationResponse } from './../types/ProductMutationResponse'
import { PaginationInput } from '../types/PaginationInput'

@Resolver()
export class ProductResolver {
	@Mutation((_return) => ProductMutationResponse)
	async addOrEditProduct(
		@Arg('addOrEditProductInput')
		{ id, ...addOrEditProductInput }: AddOrEditProductInput,
	): Promise<ProductMutationResponse> {
		try {
			if (!id) {
				const { slug, avatar } = addOrEditProductInput
				const product = await Product.findOne({ where: [{ slug }, { avatar }] })
				if (product) {
					return {
						code: 400,
						success: false,
						message: 'Duplicated product',
						errors: [
							{
								field: 'name',
								message: 'Sản phẩm đã tồn tại.',
							},
						],
					}
				}

				const newProduct = Product.create({ ...addOrEditProductInput })
				await newProduct.save()
				return {
					code: 200,
					success: true,
					message: 'Add product successful',
					product: newProduct,
				}
			} else {
				const product = await Product.findOne(id)
				if (!product) {
					return {
						code: 400,
						success: false,
						message: 'Product not found',
						errors: [
							{
								field: 'name',
								message: 'Sản phẩm không tồn tại.',
							},
						],
					}
				}

				await Product.update(id, {
					...addOrEditProductInput,
				})

				const productUpdated = await Product.findOne(id)

				return {
					code: 200,
					success: true,
					message: 'Updated product successful',
					product: productUpdated,
				}
			}
		} catch (error) {
			console.log(error)
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			}
		}

		let product = await Product.findOne(id)
		if (!product) {
			return {
				code: 400,
				success: false,
				message: 'Product not found',
				errors: [
					{
						field: 'name',
						message: 'Sản phẩm không tồn tại.',
					},
				],
			}
		}

		await Product.update(id, { ...addOrEditProductInput })

		return {
			code: 200,
			success: true,
			message: 'Edit product successful',
		}
	}

	@Query((_return) => [Product])
	async productPagination(
		@Arg('productPaginationInput')
		{ skip, take, searchTerm }: PaginationInput,
	): Promise<Product[] | undefined | null> {
		try {
			const options = {
				order: {
					updated_at: 'DESC',
				},
				skip,
				take,
				relations: [
					'category',
					'brand',
					'user_created',
					'user_updated',
					'product_colors',
					'product_images',
					'specificationses',
					'promotions',
				],
			}

			return await Product.find(
				searchTerm
					? ({
							where: { name: Like(`%${searchTerm}%`) },
							...options,
					  } as FindConditions<Product>)
					: ({ ...options } as FindConditions<Product>),
			)
		} catch (error) {
			console.log(error)
			return null
		}
	}

	@Query((_return) => Number)
	async productTotalRows(
		@Arg('searchTerm') searchTerm: string,
	): Promise<number | null> {
		try {
			if (searchTerm === '') {
				return await Product.count()
			}
			return await Product.count({ name: Like(`%${searchTerm}%`) })
		} catch (error) {
			console.log(error)
			return null
		}
	}

	@Query((_return) => Product)
	async productBySlug(
		@Arg('productSlug') productSlug: string,
	): Promise<Product | undefined | null> {
		try {
			return await Product.findOne(
				{ slug: productSlug },
				{
					relations: [
						'category',
						'brand',
						'user_created',
						'user_updated',
						'product_colors',
						'product_images',
						'specificationses',
						'promotions',
					],
				},
			)
		} catch (error) {
			console.log(error)
			return null
		}
	}

	@Mutation((_return) => String)
	async delProduct(@Arg('id') id: number): Promise<String> {
		await Product_Color.delete({ productId: id })
		await Product_Image.delete({ productId: id })
		await Specifications.delete({ productId: id })
		await Promotion.delete({ productId: id })
		await Product.delete(id)
		return 'successfully'
	}
}
