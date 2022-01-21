export interface IProduct {
	id: number
	img: string
	name: string
	priceOld: number
	discount: number
	price: number
	rating: number
	ratingTotal: number
	installment: boolean
	gift: number
}

export interface IProductName {
	id: number
	name: string
}
