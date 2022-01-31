import {
	Avatar,
	Box,
	Button,
	Flex,
	Input,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Tooltip,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MeDocument, MeQuery, useLogoutMutation } from '../generated/graphql'
import styles from '../styles/Header.module.scss'
import { useCheckAuth } from '../utils/useCheckAuth'

const Header = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()
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

	let body

	if (authLoading) {
		body = null
	} else if (!authData?.me) {
		body = (
			<Box className={styles.auth}>
				{/* login */}
				<NextLink href='/dang-nhap' passHref>
					<Link className={styles.auth_link}>Đăng nhập</Link>
				</NextLink>
				{/* login */}
				<span className={styles.auth_slash}>/</span>
				{/* register */}
				<NextLink href='/dang-ky' passHref>
					<Link className={styles.auth_link}>Đăng ký</Link>
				</NextLink>
				{/* register */}
			</Box>
		)
	} else {
		body = (
			<Box className={styles.auth}>
				<Menu>
					<MenuButton className={styles.auth_menu_btn}>
						<Avatar
							name={authData.me.username}
							src={authData.me.avatar as string | undefined}
							className={styles.auth_avatar}
						/>
						<span>
							{authData.me.last_name} {authData.me.first_name}
						</span>
					</MenuButton>
					<MenuList className={styles.auth_menu_list}>
						<MenuItem>
							<NextLink href='/thong-tin-ca-nhan' passHref>
								<Link className={styles.auth_menu_icon_wrapper}>
									<i className={`bx bx-user-pin ${styles.auth_menu_icon}`}></i>
									<span>Thông tin cá nhân</span>
								</Link>
							</NextLink>
						</MenuItem>

						<MenuItem>
							<i className={`bx bx-edit-alt ${styles.auth_menu_icon}`}></i>
							<span>Thay đổi mật khẩu</span>
						</MenuItem>

						<MenuItem
							onClick={logout}
							className={styles.auth_menu_icon_wrapper}>
							<i
								className={`bx bx-log-out-circle ${styles.auth_menu_icon}`}></i>
							<span>Đăng xuất</span>
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		)
	}

	return (
		<Flex
			justifyContent='space-around'
			alignItems='center'
			className={styles.wrapper}>
			{/* logo */}
			<NextLink href='/' passHref>
				<Link className={styles.logo}>TMB</Link>
			</NextLink>
			{/* logo */}

			{/* search */}
			<Box className={styles.search_wrapper}>
				<Box className={styles.search_icon}>
					<i className='bx bx-search-alt'></i>
				</Box>
				<Tooltip hasArrow bg='blue.400' label='Nhấn enter để tìm kiếm'>
					<Input
						className={styles.search_input}
						placeholder='Tìm kiếm sản phẩm ...'
						size='md'
					/>
				</Tooltip>
			</Box>
			{/* search */}

			<Box>
				{/* cart */}
				<NextLink href='/gio-hang' passHref>
					<Link>
						<Button
							className={styles.cart_btn}
							leftIcon={<i className={`bx bx-cart ${styles.cart_icon}`}></i>}
							variant='outline'
							fontSize={14}>
							Giỏ hàng
						</Button>
					</Link>
				</NextLink>
				{/* cart */}

				{/* history */}
				<NextLink href='/lich-su-don-hang' passHref>
					<Link className={`${styles.link} ${styles.history}`}>
						Lịch sử đơn hàng
					</Link>
				</NextLink>
				{/* history */}
			</Box>

			{/* auth */}
			{body}
			{/* auth */}
		</Flex>
	)
}

export default Header
