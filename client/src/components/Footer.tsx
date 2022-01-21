import {
	Box,
	Center,
	Container,
	Flex,
	Link,
	List,
	ListItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IImage } from '../interface/image'
import styles from '../styles/Footer.module.scss'

interface IContent {
	id: number
	name: string
	slug: string
}

interface IIntroduce {
	id: number
	title: string
	content: IContent[]
}

interface IContact {
	id: number
	name: string
	link: string
	icon: string
	color: string
}

const Footer = () => {
	const introduces: IIntroduce[] = [
		{
			id: 1,
			title: 'Hệ thống TMB',
			content: [
				{
					id: 1,
					name: 'Giới thiệu TMB',
					slug: 'gioi-thieu',
				},
				{
					id: 2,
					name: 'Trung tâm sửa chữa & bảo hành (08:00 - 20:00)',
					slug: 'trung-tam-sua-chua-bao-hanh',
				},
				{
					id: 3,
					name: 'Trung tâm bảo hành chính hãng',
					slug: 'trung-tam-bao-hanh-chinh-hang',
				},
				{
					id: 4,
					name: 'Hợp tác kinh doanh',
					slug: 'hop-tac-kinh-doanh',
				},
				{
					id: 5,
					name: 'Tuyển dụng',
					slug: 'tuyen-dung',
				},
			],
		},
		{
			id: 2,
			title: 'Hướng dẫn mua hàng',
			content: [
				{
					id: 1,
					name: 'Hướng dẫn mua hàng online',
					slug: 'huong-dan-mua-hang-online',
				},
				{
					id: 2,
					name: 'Hướng dẫn mua hàng trả góp',
					slug: 'huong-dan-mua-hang-tra-gop',
				},
				{
					id: 3,
					name: 'Vận chuyển - thanh toán',
					slug: 'van-chuyen-thanh-toan',
				},
				{
					id: 4,
					name: 'Chính sách đổi trả / bảo hành',
					slug: 'chinh-sach-doi-tra-bao-hanh',
				},
				{
					id: 5,
					name: 'Điều khoản sử dụng',
					slug: 'dieu-khoan-su-dung',
				},
			],
		},
	]

	const contacts: IContact[] = [
		{
			id: 1,
			name: 'Facebook',
			link: 'https://www.facebook.com/toan020101',
			icon: 'bx bxl-facebook-square',
			color: '#2539f1',
		},
		{
			id: 2,
			name: 'Youtube',
			link: 'https://www.youtube.com',
			icon: 'bx bxl-youtube',
			color: '#f1252f',
		},
		{
			id: 3,
			name: '0924212027',
			link: 'tel:',
			icon: 'bx bx-mobile-vibration',
			color: '#f15a25',
		},
	]

	const payments: IImage[] = [
		{
			id: 1,
			link: 'https://stcv4.hnammobile.com/v7/images/icon/master_card.svg',
			name: 'sahhdjas',
		},
		{
			id: 2,
			link: 'https://stcv4.hnammobile.com/v7/images/icon/visa.svg',
			name: 'askjdkas',
		},
		{
			id: 3,
			link: 'https://stcv4.hnammobile.com/v7/images/icon/momo.svg',
			name: 'asdikasd',
		},
	]

	return (
		<Box className={styles.wrapper}>
			<Container maxW='1232px'>
				<Flex justifyContent='space-between'>
					{introduces.map((item) => (
						<List key={item.id}>
							<ListItem className={styles.title}>{item.title}</ListItem>
							{item.content.map((i) => (
								<ListItem key={i.id} className={styles.content}>
									<NextLink href={`/${i.slug}`} passHref>
										<Link>{i.name}</Link>
									</NextLink>
								</ListItem>
							))}
						</List>
					))}

					<Box>
						{/* contact */}
						<Box>
							<Box className={styles.title}>Kết nối TMB</Box>
							<Flex
								wrap='wrap'
								justifyContent='space-between'
								alignItems='center'>
								{contacts.map((item) => (
									<Center className={styles.contact_item} key={item.id}>
										<i
											className={`${item.icon} ${styles.contact_item_icon}`}
											style={{ color: item.color }}></i>
										{item.link !== 'tel:' ? (
											<>
												<NextLink href={item.link} passHref>
													<Link target='_black'>{item.name}</Link>
												</NextLink>
											</>
										) : (
											<>
												<NextLink href={`${item.link}${item.name}`} passHref>
													<Link>
														Hotline{' '}
														<span className={styles.contact_item_phone}>
															{item.name}
														</span>
													</Link>
												</NextLink>
											</>
										)}
									</Center>
								))}
							</Flex>
						</Box>
						{/* contact */}

						{/* payment */}
						<Box mt={10}>
							<Box className={styles.title} mb={3}>
								Phương thức thanh toán
							</Box>
							<Flex wrap='wrap'>
								{payments.map((item) => (
									<Box mr={3} key={item.id}>
										<img src={item.link} />
									</Box>
								))}
							</Flex>
						</Box>
						{/* payment */}
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default Footer
