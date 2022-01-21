export interface IColor {
	id: number
	link: string
	color: string
}

export interface ICart {
	id: number
	name: string
	color: string
	link: string
	colors: IColor[]
	price: number
	quantity: number
}
