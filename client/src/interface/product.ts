export interface IProduct {
	id: number
	name: string
	slug: string
	avatar: string
	description: string
	price_input: number
	discount: number
	price: number
	installment: boolean
	best_sell: boolean
	highlight: boolean
	new: boolean
	gift: number
	categoryId: number
	brandId: number
}

export interface IProductName {
	id: number
	name: string
}
