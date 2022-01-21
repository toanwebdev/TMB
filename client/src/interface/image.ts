export interface IImage {
	id: number
	link: string
	name: string
}

export interface IImageProduct {
	id: number
	color: string
	avatar: string
	imgs: IImage[]
}
