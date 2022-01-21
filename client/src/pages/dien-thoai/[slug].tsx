import { Box, Flex } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import DetailInfo from '../../components/product/Detail/DetailInfo'
import DetailPayment from '../../components/product/Detail/DetailPayment'
import DetailSlider from '../../components/product/Detail/DetailSlider'
import DetailTitle from '../../components/product/Detail/DetailTitle'
import { IConfig } from '../../interface/config'
import { IImageProduct } from '../../interface/image'

const detailTitle = 'Điện thoại Samsung Galaxy S21 FE 5G (8GB/256GB)'

const SmartphoneItem = () => {
	const sliderImgs: IImageProduct[] = [
		{
			id: 1,
			color: 'Xanh lá',
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/267212/Samsung-Galaxy-S21-FE-vang-200x200.jpg',
			imgs: [
				{
					id: 1,
					link: 'https://cdn.tgdd.vn/Products/Images/42/267212/samsung-galaxy-s21-fe-xanh-1.jpg',
					name: 'ashdsa',
				},
				{
					id: 2,
					link: 'https://cdn.tgdd.vn/Products/Images/42/267212/samsung-galaxy-s21-fe-xanh-2.jpg',
					name: 'askdasd',
				},
				{
					id: 3,
					link: 'https://cdn.tgdd.vn/Products/Images/42/267212/samsung-galaxy-s21-fe-xanh-3.jpg',
					name: 'asjdhasd',
				},
			],
		},
		{
			id: 2,
			color: 'Tím',
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-sliver3-org.jpg',
			imgs: [
				{
					id: 1,
					link: 'https://cdn.tgdd.vn/Products/Images/42/267212/samsung-galaxy-s21-fe-xanh-1.jpg',
					name: 'asmhdjas',
				},
				{
					id: 2,
					link: 'https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-sliver4-org.jpg',
					name: 'sadhjkasd',
				},
				{
					id: 3,
					link: 'https://cdn.tgdd.vn/Products/Images/42/267212/samsung-galaxy-s21-fe-xanh-3.jpg',
					name: 'sadjashdj',
				},
			],
		},
	]

	const description =
		'<div><p><b>Galaxy A12 (6GB/128GB) 2021, một phiên bản smartphone giá rẻ với thiết kế đẹp, cấu hình tốt, trang bị cụm camera chất lượng vượt trội, hứa hẹn mang đến hiệu suất sử dụng cao trên cả các tác vụ giải trí và làm việc.</b></p> <p><h3>Ngoại hình trẻ trung, nịnh mắt</h3></p> <p>Galaxy A12 (2021) hẳn sẽ được sự quan tâm của nhiều bạn trẻ khi trình làng với nhiều biến thể màu đẹp mắt gồm trắng, đen và xanh dương rất dễ chọn lựa.</p> <p><img src="https://cdn.tgdd.vn/Products/Images/42/251888/samsung-galaxy-a12-6gb-2021-1.jpg" alt="" /></p></div>'

	const configurations: IConfig = {
		title: 'Cấu hình Điện thoại Samsung Galaxy Z Fold3 5G 256GB',
		contents: [
			{
				id: 1,
				name: 'Màn hình',
				content: 'Dynamic AMOLED 2XChính 7.6" & Phụ 6.2", Full HD+',
			},
			{
				id: 2,
				name: 'Hệ điều hành',
				content: 'Android 11',
			},
			{
				id: 3,
				name: 'Camera sau',
				content: '3 camera 12 MP',
			},
			{
				id: 4,
				name: 'Camera trước',
				content: '10 MP & 4 MP',
			},
			{
				id: 5,
				name: 'Chip',
				content: 'Snapdragon 888',
			},
			{
				id: 6,
				name: 'RAM',
				content: '12 GB',
			},
			{
				id: 7,
				name: 'Bộ nhớ trong',
				content: '256 GB',
			},
			{
				id: 8,
				name: 'SIM',
				content: '2 Nano SIM + 1 eSIMHỗ trợ 5G',
			},
			{
				id: 9,
				name: 'Pin, Sạc',
				content: '4400 mAh25 W',
			},
		],
	}

	const option = {
		rams: ['4GB', '6GB'],
		colors: ['Xanh lá', 'Tím'],
	}

	const promotions = [
		'Giảm 100.000đ',
		'Giảm thêm 2% khi mua cùng sản phẩm bất kỳ có giá cao hơn',
		'Tặng gói ưu đãi quà tặng Galaxy trị giá đến 600,000đ',
	]

	return (
		<Layout>
			{/* title */}
			<DetailTitle detailTitle={detailTitle} />
			{/* title */}

			<Flex justifyContent='space-between'>
				<Box>
					{/* slider */}
					<DetailSlider sliderImgs={sliderImgs} />
					{/* slider */}

					{/* info */}
					<DetailInfo description={description} />
					{/* info */}
				</Box>

				<DetailPayment
					option={option}
					configurations={configurations}
					promotions={promotions}
				/>
			</Flex>
		</Layout>
	)
}

export default SmartphoneItem
