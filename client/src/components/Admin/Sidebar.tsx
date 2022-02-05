import { Box, Flex, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import styles from '../../styles/Admin/Sidebar.module.scss'
import { MeDocument, MeQuery, useLogoutMutation } from '../../generated/graphql'
import { useRouter } from 'next/router'

interface IMenu {
	id: number
	name: string
	slug: string
	icon: string
}

const Sidebar = () => {
	const [sideIndex, setSideIndex] = useState(0)
	const router = useRouter()

	const [logoutUser] = useLogoutMutation()
	const logout = async () => {
		await logoutUser({
			update(cache, { data }) {
				if (data?.logout) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: null },
					})
				}
			},
		})
	}

	const sidebars: IMenu[] = [
		{
			id: 1,
			name: 'Trang chủ',
			slug: '',
			icon: 'bx bx-home-alt',
		},
		{
			id: 2,
			name: 'Đặt hàng',
			slug: 'dat-hang',
			icon: 'bx bx-receipt',
		},
		{
			id: 3,
			name: 'Sản phẩm',
			slug: 'san-pham',
			icon: 'bx bx-cube',
		},
		{
			id: 4,
			name: 'Tài khoản',
			slug: 'tai-khoan',
			icon: 'bx bx-user',
		},
		{
			id: 5,
			name: 'Số liệu thống kê',
			slug: 'so-lieu-thong-ke',
			icon: 'bx bx-line-chart',
		},
		{
			id: 6,
			name: 'Cài đặt',
			slug: 'cai-dat',
			icon: 'bx bx-cog',
		},
	]

	useEffect(() => {
		const curPath = router.route.split('/quan-tri')[1]
		const activeIndex = sidebars.findIndex(
			(item) => `/${item.slug}` === curPath,
		)

		setSideIndex(curPath.length === 0 ? 0 : activeIndex)
	}, [router])

	return (
		<Flex
			justifyContent='flex-start'
			direction='column'
			className={styles.wrapper}>
			<Box>
				<Flex
					justifyContent='center'
					alignItems='center'
					className={styles.logo}>
					<span>TMB</span>
				</Flex>
			</Box>

			<Box className={styles.content}>
				{sidebars.map((item, index) => (
					<NextLink key={item.id} href={`/quan-tri/${item.slug}`} passHref>
						<Link
							className={`${styles.content_item} ${
								sideIndex === index && styles.active
							}`}>
							<span className={styles.content_item_icon}>
								<i className={item.icon}></i>
							</span>
							<span>{item.name}</span>
						</Link>
					</NextLink>
				))}
				<Box className={styles.content_item} onClick={logout}>
					<span className={styles.content_item_icon}>
						<i className='bx bx-log-out-circle'></i>
					</span>
					<span>Đăng xuất</span>
				</Box>
			</Box>
		</Flex>
	)
}

export default Sidebar
