import { Box, Button, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ICart } from '../../interface/cart'
import { IMenu } from '../../interface/menu'
import styles from '../../styles/cart/CartLayout.module.scss'
import numberWithCommas from '../../utils/numberWithCommas'
import CartEmpty from './CartEmpty'
import CartForm from './CartForm'
import CartItem from './CartItem'

interface ICartProps {
	products: ICart[]
	cities: IMenu[]
}

const CartLayout = ({ products, cities }: ICartProps) => {
	const totalProduct = () => {
		let count = 0
		for (let i = 0; i < products.length; i++) {
			count += products[i].quantity
		}
		return count
	}

	const total = totalProduct()

	const priceTotalProduct = () => {
		let count = 0
		for (let i = 0; i < products.length; i++) {
			count += products[i].price
		}
		return count
	}

	const priceTotal = priceTotalProduct()

	return (
		<Box className={styles.wrapper}>
			{total === 0 ? (
				<CartEmpty />
			) : (
				<Flex
					direction='column'
					justifyContent='center'
					alignItems='center'
					className={styles.not_empty}>
					<Flex
						justifyContent='space-between'
						className={styles.not_empty_header}>
						<NextLink href='/' passHref>
							<Link className={styles.not_empty_header_link}>
								Mua thêm sản phẩm khác
							</Link>
						</NextLink>

						<span>Giỏ hàng của bạn</span>
					</Flex>

					<Box className={styles.not_empty_content}>
						<CartItem products={products} />
						<CartForm cities={cities} />

						<Flex
							justifyContent='space-between'
							alignItems='center'
							className={styles.not_empty_content_price_total}>
							<span>Tổng tiền:</span>
							<span className={styles.not_empty_content_price_total_number}>
								{numberWithCommas(priceTotal)}₫
							</span>
						</Flex>

						<Button className={styles.not_empty_content_book}>đặt hàng</Button>
					</Box>

					<span className={styles.not_empty_footer}>
						Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của TMB
					</span>
				</Flex>
			)}
		</Box>
	)
}

export default CartLayout
