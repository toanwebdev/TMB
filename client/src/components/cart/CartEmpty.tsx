import { Box, Button, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import styles from '../../styles/cart/CartEmpty.module.scss'

const CartEmpty = () => {
	return (
		<Flex
			direction='column'
			justifyContent='center'
			alignItems='center'
			className={styles.empty}>
			<Box className={styles.empty_icon_wrapper}>
				<i className={`bx bxs-cart ${styles.empty_icon_cart}`}></i>
				<i className={`bx bxs-x-circle ${styles.empty_icon_x}`}></i>
			</Box>
			<span className={styles.empty_content}>
				Không có sản phẩm nào trong giỏ hàng
			</span>
			<NextLink href='/' passHref>
				<Link>
					<Button variant='outline' className={styles.empty_btn}>
						về trang chủ
					</Button>
				</Link>
			</NextLink>
		</Flex>
	)
}

export default CartEmpty
