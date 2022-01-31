import Layout from '../components/Layout'
import ProductFilter from '../components/product/ProductFilter'
import ProductGroup from '../components/product/ProductGroup'
import ProductSlider from '../components/product/ProductSlider'
import { IFilterMore } from '../interface/filter'
import { IImage } from '../interface/image'
import { IMenu } from '../interface/menu'
import { IProduct } from '../interface/product'

const MacBookLaptop = () => {
	const sliderImgs: IImage[] = [
		{
			id: 1,
			link: 'https://cdn.tgdd.vn/2022/01/banner/800-200-800x200-1.png',
			name: 'Smartphone Gắn Kết - Lì Xì Đến 5 Triệu',
		},
		{
			id: 2,
			link: 'https://cdn.tgdd.vn/2022/01/banner/tab10s-800-200-800x200.png',
			name: 'Đồng Hồ Xả Hàng - Giảm Đến 50%++',
		},
		{
			id: 3,
			link: 'https://cdn.tgdd.vn/2022/01/banner/tab-s7-fe-800-200-800x200.png',
			name: 'Galaxy S21 FE 5G - Đặt Trước Quà Ngon',
		},
		{
			id: 4,
			link: 'https://cdn.tgdd.vn/2022/01/banner/tet-reno6z-800-200-800x200.png',
			name: 'Đặt Trước Vivo V23 5G - Rước Bộ Quà 3 Triệu',
		},
		{
			id: 5,
			link: 'https://cdn.tgdd.vn/2021/12/banner/tet-vivo-800-200-800x200.png',
			name: 'Đồng Hồ Xả Hàng - Giảm Đến 50%++',
		},
	]

	const bannerImgs: IImage[] = [
		{
			id: 1,
			link: 'https://cdn.tgdd.vn/2021/12/banner/Stickya-390x97.png',
			name: 'shdashd',
		},
		{
			id: 2,
			link: 'https://cdn.tgdd.vn/2022/01/banner/390-97-390x97-1.png',
			name: 'asdjsahd',
		},
	]

	const filterImgs: IImage[] = [
		{
			id: 1,
			link: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
			name: 'asdhajshd',
		},
		{
			id: 2,
			link: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
			name: 'asdhasjhd',
		},
		{
			id: 3,
			link: 'https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
			name: 'asdgas',
		},
		{
			id: 4,
			link: 'https://cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg',
			name: 'sadhsadsa',
		},
		{
			id: 5,
			link: 'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
			name: 'ajshdsagdh',
		},
	]

	const filterTotal = 128

	const filterPrices: number[] = [0, 5, 10, 20]

	const filterMenus: IMenu[] = [
		{
			id: '1',
			name: 'Mới nhất',
		},
		{
			id: '2',
			name: 'A - Z',
		},
		{
			id: '3',
			name: 'Z - A',
		},
		{
			id: '4',
			name: 'Giá tăng dần',
		},
		{
			id: '5',
			name: 'Giá giảm dần',
		},
	]

	const filterMores: IFilterMore[] = [
		{
			id: 1,
			title: 'Tính năng',
			contents: [
				'2 Sim',
				'Bảo mật vân tay',
				'Chuyên self',
				'Hỗ trợ 4G',
				'Pin khủng(>3000 mAh)',
				'Tràn viền',
			],
			key: 'TN',
		},
		{
			id: 2,
			title: 'Bộ nhớ',
			contents: ['32 GB', '64 GB', '128 GB', '256 GB', '512 GB'],
			key: 'BN',
		},
	]
	const phoneProducts: IProduct[] = [
		{
			id: 1,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 4,
			ratingTotal: 82,
			installment: true,
			gift: 500000,
		},
		{
			id: 2,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 4,
			ratingTotal: 82,
			installment: true,
			gift: 500000,
		},
		{
			id: 3,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 4,
			ratingTotal: 82,
			installment: false,
			gift: 500000,
		},
		{
			id: 4,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 0,
			discount: 0,
			price: 32990000,
			rating: 2,
			ratingTotal: 12,
			installment: false,
			gift: 0,
		},
		{
			id: 5,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 3,
			ratingTotal: 128,
			installment: true,
			gift: 300000,
		},
		{
			id: 6,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 4,
			ratingTotal: 82,
			installment: true,
			gift: 500000,
		},
		{
			id: 7,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 4,
			ratingTotal: 82,
			installment: true,
			gift: 500000,
		},
		{
			id: 8,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 4,
			ratingTotal: 82,
			installment: false,
			gift: 500000,
		},
		{
			id: 9,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 0,
			discount: 0,
			price: 32990000,
			rating: 2,
			ratingTotal: 12,
			installment: false,
			gift: 0,
		},
		{
			id: 10,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32990000,
			rating: 3,
			ratingTotal: 128,
			installment: true,
			gift: 300000,
		},
	]

	return (
		<Layout>
			{/* slider */}
			<ProductSlider sliderImgs={sliderImgs} bannerImgs={bannerImgs} />
			{/* slider */}

			{/* filter */}
			<ProductFilter
				filterImgs={filterImgs}
				filterTotal={filterTotal}
				filterPrices={filterPrices}
				filterMenus={filterMenus}
				filterMores={filterMores}
			/>
			{/* filter */}

			{/* product */}
			<ProductGroup products={phoneProducts} productTotal={filterTotal} />
			{/* product */}
		</Layout>
	)
}

export default MacBookLaptop
