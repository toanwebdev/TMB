import { ToastContainer } from 'react-toastify'
import News from '../components/home/News'
import Outstanding from '../components/home/Outstanding'
import ProductSale from '../components/home/ProductSale'
import SliderHome from '../components/home/SliderHome'
import Layout from '../components/Layout'
import { IImage } from '../interface/image'
import { INews } from '../interface/news'
import { IProduct, IProductName } from '../interface/product'

const Index = () => {
	const sliderImgs: IImage[] = [
		{
			id: 1,
			link: 'https://cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Smartphone Gắn Kết - Lì Xì Đến 5 Triệu',
		},
		{
			id: 2,
			link: '//cdn.tgdd.vn/2022/01/banner/830-300-830x300-1.png',
			name: 'Đồng Hồ Xả Hàng - Giảm Đến 50%++',
		},
		{
			id: 3,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-26.png',
			name: 'Galaxy S21 FE 5G - Đặt Trước Quà Ngon',
		},
		{
			id: 4,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Đặt Trước Vivo V23 5G - Rước Bộ Quà 3 Triệu',
		},
		{
			id: 5,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Đồng Hồ Xả Hàng - Giảm Đến 50%++',
		},
		{
			id: 6,
			link: '//cdn.tgdd.vn/2021/12/banner/tet-laptop-830-300-830x300.png',
			name: 'Galaxy S21 FE 5G - Đặt Trước Quà Ngon',
		},
		{
			id: 7,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Đặt Trước Vivo V23 5G - Rước Bộ Quà 3 Triệu',
		},
		{
			id: 8,
			link: '//cdn.tgdd.vn/2021/12/banner/tet-laptop-830-300-830x300.png',
			name: 'Smartphone Gắn Kết - Lì Xì Đến 5 Triệu',
		},
	]

	const bannerImgs: IImage[] = [
		{
			id: 1,
			link: '//cdn.tgdd.vn/2021/12/banner/laptopdesk(1)-340x340.jpg',
			name: 'asdjhasd',
		},
		{
			id: 2,
			link: 'https://cdn.tgdd.vn/2022/01/banner/laptopdesk(2)-340x340.jpg',
			name: 'sanhdas',
		},
		{
			id: 3,
			link: 'https://cdn.tgdd.vn/2022/01/banner/laptopdesk-340x340.jpg',
			name: 'asndhassd',
		},
		{
			id: 4,
			link: 'https://cdn.tgdd.vn/2022/01/banner/tainghe-340x340.jpg',
			name: 'asdhgsashdja',
		},
	]

	const productSales: IProduct[] = [
		{
			id: 1,
			img: 'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceOld: 33990000,
			discount: 11,
			price: 32000000,
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

	const phoneOutstandingNames: IProductName[] = [
		{
			id: 1,
			name: 'iPhone 13 Series',
		},
		{
			id: 2,
			name: 'Samsung Galaxy A52s',
		},
		{
			id: 3,
			name: 'Oppo Reni6 Z',
		},
	]

	const phoneOutstandingTotal = 174

	const phoneOutstandingProducts: IProduct[] = [
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

	const macLapOutstandingNames: IProductName[] = [
		{
			id: 1,
			name: 'Laptop Asus',
		},
		{
			id: 2,
			name: 'Laptop HP',
		},
	]

	const macLapOutstandingTotal = 199

	const macLapOutstandingProducts: IProduct[] = [
		{
			id: 1,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 2,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 3,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 4,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 5,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 6,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 7,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 8,
			img: 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
	]

	const accessoryOutstandingNames: IProductName[] = [
		{
			id: 1,
			name: 'Sạc Dự Phòng',
		},
		{
			id: 2,
			name: 'Cáp Sạc',
		},
		{
			id: 3,
			name: 'Tai Nghe',
		},
		{
			id: 4,
			name: 'Loa',
		},
		{
			id: 5,
			name: 'Ốp Lưng',
		},
	]

	const accessoryOutstandingTotal = 555

	const accessoryOutstandingProducts: IProduct[] = [
		{
			id: 1,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: true,
			gift: 1880000,
		},
		{
			id: 2,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: true,
			gift: 1880000,
		},
		{
			id: 3,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: true,
			gift: 1880000,
		},
		{
			id: 4,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: true,
			gift: 1880000,
		},
		{
			id: 5,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 6,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 7,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
		{
			id: 8,
			img: 'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceOld: 29990000,
			discount: 6,
			price: 28190000,
			rating: 4,
			ratingTotal: 28,
			installment: false,
			gift: 1880000,
		},
	]

	const news: INews[] = [
		{
			id: 1,
			link: 'https://cdn.tgdd.vn/Files/2022/01/08/1409875/thumb_800x450-500x500.jpg',
			title:
				'Đánh giá itel Able 1S N4020: Laptop học tập - văn phòng gọn nhẹ, cấu hình đủ dùng cùng mức giá tốt',
			timeOld: '1 giờ trước',
		},
		{
			id: 2,
			link: 'https://cdn.tgdd.vn/Files/2022/01/08/1409875/thumb_800x450-500x500.jpg',
			title:
				'Đánh giá itel Able 1S N4020: Laptop học tập - văn phòng gọn nhẹ, cấu hình đủ dùng cùng mức giá tốt',
			timeOld: '1 giờ trước',
		},
		{
			id: 3,
			link: 'https://cdn.tgdd.vn/Files/2022/01/08/1409875/thumb_800x450-500x500.jpg',
			title:
				'Đánh giá itel Able 1S N4020: Laptop học tập - văn phòng gọn nhẹ, cấu hình đủ dùng cùng mức giá tốt',
			timeOld: '1 giờ trước',
		},
		{
			id: 4,
			link: 'https://cdn.tgdd.vn/Files/2022/01/08/1409875/thumb_800x450-500x500.jpg',
			title:
				'Đánh giá itel Able 1S N4020: Laptop học tập - văn phòng gọn nhẹ, cấu hình đủ dùng cùng mức giá tốt',
			timeOld: '1 giờ trước',
		},
		{
			id: 5,
			link: 'https://cdn.tgdd.vn/Files/2022/01/08/1409875/thumb_800x450-500x500.jpg',
			title:
				'Đánh giá itel Able 1S N4020: Laptop học tập - văn phòng gọn nhẹ, cấu hình đủ dùng cùng mức giá tốt',
			timeOld: '1 giờ trước',
		},
		{
			id: 6,
			link: 'https://cdn.tgdd.vn/Files/2022/01/08/1409875/thumb_800x450-500x500.jpg',
			title:
				'Đánh giá itel Able 1S N4020: Laptop học tập - văn phòng gọn nhẹ, cấu hình đủ dùng cùng mức giá tốt',
			timeOld: '1 giờ trước',
		},
	]

	return (
		<>
			<ToastContainer />
			<Layout>
				{/* slider */}
				<SliderHome sliderImgs={sliderImgs} bannerImgs={bannerImgs} />
				{/* slider */}

				{/* product sale */}
				<ProductSale products={productSales} />
				{/* product sale */}

				{/* Phone outstanding */}
				<Outstanding
					outstandingTitle='Điện thoại'
					productNames={phoneOutstandingNames}
					productTotal={phoneOutstandingTotal}
					products={phoneOutstandingProducts}
				/>
				{/* Phone outstanding */}

				{/* MacBook & Laptop outstanding */}
				<Outstanding
					outstandingTitle='MacBook & Laptop'
					productNames={macLapOutstandingNames}
					productTotal={macLapOutstandingTotal}
					products={macLapOutstandingProducts}
				/>

				{/* accessories outstanding */}
				<Outstanding
					outstandingTitle='Phụ Kiện'
					productNames={accessoryOutstandingNames}
					productTotal={accessoryOutstandingTotal}
					products={accessoryOutstandingProducts}
				/>
				{/* accessories outstanding */}

				{/* news */}
				<News news={news} />
				{/* news */}
			</Layout>
		</>
	)
}

export default Index
