import { Box, Button, Flex, Input, Link, Tooltip } from '@chakra-ui/react'
import NextLink from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
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
			<Box className={styles.auth}>
				{/* login */}
				<NextLink href='/dang-nhap' passHref>
					<Link className={styles.auth_link}>Đăng nhập</Link>
				</NextLink>
				{/* login */}
				{` / `}
				{/* register */}
				<NextLink href='/dang-ky' passHref>
					<Link className={styles.auth_link}>Đăng ký</Link>
				</NextLink>
				{/* register */}
			</Box>
			{/* auth */}
		</Flex>
	)
}

export default Header
