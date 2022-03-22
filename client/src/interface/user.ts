export interface IGetUser {
	id: string
	last_name: string
	first_name: string
	username: string
	email: string
	gender: string
	avatar: string
	phone_num: string
	status: number
	street: string
	province: {
		id: string
		name: string
	}
	district: {
		id: string
		name: string
	}
	village: {
		id: string
		name: string
	}
}
