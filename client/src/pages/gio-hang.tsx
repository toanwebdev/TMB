import CartLayout from '../components/cart/CartLayout'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { ICart } from '../interface/cart'
import { IMenu } from '../interface/menu'

const Cart = () => {
	const products: ICart[] = [
		{
			id: 1,
			name: 'Điện thoại Samsung Galaxy A32',
			color: 'Xanh Dương',
			link: 'https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-xanh-600x600-200x200.jpg',
			colors: [
				{
					id: 1,
					link: 'https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-den-600x600-200x200.jpg',
					color: 'Đen',
				},
				{
					id: 2,
					link: 'https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-xanh-600x600-200x200.jpg',
					color: 'Xanh Dương',
				},
			],
			price: 15000000,
			quantity: 3,
		},

		{
			id: 2,
			name: 'Điện thoại OPPO A95',
			color: 'Đen',
			link: 'https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-black-1-1-2-200x200.jpg',
			colors: [
				{
					id: 1,
					link: 'https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-black-1-1-2-200x200.jpg',
					color: 'Đen',
				},
				{
					id: 2,
					link: 'https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-2-200x200.jpg',
					color: 'Bạc',
				},
			],
			price: 3900000,
			quantity: 1,
		},
	]

	const cities: IMenu[] = [
		{
			id: 1,
			name: 'Hồ Chí Minh',
		},
		{
			id: 2,
			name: 'Hà Nội',
		},
		{
			id: 3,
			name: 'Đà Nẵng',
		},
		{
			id: 4,
			name: 'Nghệ An',
		},
		{
			id: 5,
			name: 'Hà Tĩnh',
		},
		{
			id: 6,
			name: 'Sài Gòn',
		},
		{
			id: 7,
			name: 'Cà Mau',
		},
		{
			id: 8,
			name: 'Vĩnh Long',
		},
		{
			id: 9,
			name: 'Gia Lai',
		},
		{
			id: 10,
			name: 'Thái Nguyên',
		},
	]

	return (
		<>
			<Header />
			<Menu />
			<CartLayout products={products} cities={cities} />
		</>
	)
}

export default Cart
