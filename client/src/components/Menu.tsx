import { Box, Center, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Menu.module.scss'

interface IMenu {
	id: number
	name: string
	slug: string
	icon: string
}

const Menu = () => {
	const router = useRouter()

	const menus: IMenu[] = [
		{
			id: 1,
			name: 'Điện thoại',
			slug: '/dien-thoai',
			icon: 'bx bx-mobile-alt',
		},
		{
			id: 2,
			name: 'MacBook & Laptop',
			slug: '/macbook-laptop',
			icon: 'bx bx-laptop',
		},
		{
			id: 3,
			name: 'Phụ kiện',
			slug: '/phu-kien',
			icon: 'bx bx-headphone',
		},
		{
			id: 4,
			name: 'Tin tức',
			slug: '/tin-tuc',
			icon: 'bx bx-receipt',
		},
		{
			id: 5,
			name: 'Dịch vụ',
			slug: '/dich-vu',
			icon: 'bx bx-cog',
		},
		{
			id: 6,
			name: 'Liên hệ',
			slug: '/lien-he',
			icon: 'bx bx-mail-send',
		},
	]

	return (
		<Box className={styles.wrapper}>
			<Flex
				justifyContent='space-evenly'
				alignItems='center'
				className={styles.item_wrapper}>
				{menus.map((item) => (
					<NextLink href={item.slug} passHref key={item.id}>
						<Link
							className={router.route === item.slug ? styles.item_active : ''}>
							<Center className={styles.item}>
								<i className={`${item.icon} ${styles.item_icon}`}></i>
								<Box>{item.name}</Box>
							</Center>
						</Link>
					</NextLink>
				))}
			</Flex>
		</Box>
	)
}

export default Menu
