import { EditProductInput } from './../types/EditProductInput'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Product } from './../entities/Product'
import { AddProductInput } from './../types/AddProductInput'
import { ProductMutationResponse } from './../types/ProductMutationResponse'
import { ProductPaginationInput } from './../types/ProductPaginationInput'

@Resolver()
export class ProductResolver {
	@Mutation((_return) => ProductMutationResponse)
	async addProduct(
		@Arg('addProductInput') addProductInput: AddProductInput,
	): Promise<ProductMutationResponse> {
		try {
			const { slug, avatar } = addProductInput
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

			const newProduct = Product.create({ ...addProductInput })
			await newProduct.save()
			return {
				code: 200,
				success: true,
				message: 'Add product successful',
				product: newProduct,
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

	@Mutation((_return) => ProductMutationResponse)
	async editProduct(
		@Arg('editProductInput') { id, ...editProductInput }: EditProductInput,
	): Promise<ProductMutationResponse> {
		try {
			let product = await Product.findOne({ id })
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

			await Product.update(id, { ...editProductInput })

			return {
				code: 200,
				success: true,
				message: 'Edit product successful',
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

	@Query((_return) => [Product])
	async productPagination(
		@Arg('productPaginationInput') { skip, take }: ProductPaginationInput,
	): Promise<Product[] | undefined | null> {
		try {
			return await Product.find({
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
			})
		} catch (error) {
			console.log(error)
			return null
		}
	}

	@Query((_return) => Number)
	async totalRows(): Promise<number | null> {
		try {
			return await Product.count()
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
}
