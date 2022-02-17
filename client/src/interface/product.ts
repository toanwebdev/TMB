export interface IProduct {
	id: number
	name: string
	slug: string
	avatar: string
	description: string
	price_input: number
	discount: number
	price: number
	quantity: number
	installment: boolean
	best_sell: boolean
	highlight: boolean
	new: boolean
	gift: number
	categoryId: number
	brandId: number
	userCreatedId: number
	userUpdatedId: number
}

export interface IProductName {
	id: number
	name: string
}

export interface ICategory {
	id: string
	name: string
}

export interface IBrand {
	id: string
	name: string
	logo: string
}

export interface IUserName {
	id: string
	last_name: string
	first_name: string
}

export interface IProductColors {
	colorId: number
}

export interface IProductImages {
	id: string
	link: string
	colorId: number
}

export interface ISpecificationses {
	id: string
	name: string
	content: string
}

export interface IPromotions {
	id: string
	content: string
}
export interface IGetProduct {
	id: string
	name: string
	slug?: string
	avatar: string
	description?: string
	price_input: number
	discount?: number
	price: number
	quantity: number
	installment: boolean
	best_sell: boolean
	highlight: boolean
	new: boolean
	gift?: number
	category: ICategory
	brand: IBrand
	product_colors: IProductColors[]
	product_images: IProductImages[]
	specificationses: ISpecificationses[]
	promotions: IPromotions[]
	user_created: IUserName
	user_updated: IUserName
}
