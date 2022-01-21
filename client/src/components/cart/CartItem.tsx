import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { ICart } from '../../interface/cart'
import styles from '../../styles/cart/CartItem.module.scss'
import numberWithCommas from '../../utils/numberWithCommas'

interface ICartItemProps {
	products: ICart[]
}

const CartItem = ({ products }: ICartItemProps) => {
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
		<>
			{products.map((item) => (
				<Flex key={item.id} className={styles.product_item}>
					<Flex direction='column' justifyContent='center' alignItems='center'>
						<img
							src={item.link}
							alt={item.name}
							className={styles.product_item_img}
						/>
						<Flex alignItems='center' className={styles.product_item_del}>
							<i
								className={`bx bxs-x-circle ${styles.product_item_del_icon}`}></i>
							<span>Xóa</span>
						</Flex>
					</Flex>

					<Flex justifyContent='space-between' width='485px'>
						<Box className={styles.product_item_info}>
							<Box className={styles.product_item_info_title}>{item.name}</Box>
							<Menu>
								<MenuButton className={styles.product_item_info_menu_btn}>
									<span>Màu: {item.color}</span>
									<i
										className={`bx bx-chevron-down ${styles.product_item_info_menu_btn_icon}`}></i>
								</MenuButton>
								<MenuList className={styles.product_item_info_menu_list}>
									{item.colors.map((i) => (
										<MenuItem key={i.id}>{i.color}</MenuItem>
									))}
								</MenuList>
							</Menu>
						</Box>

						<Flex direction='column' justifyContent='space-between'>
							<span className={styles.product_item_price}>
								{numberWithCommas(item.price)}₫
							</span>
							<Flex
								justifyContent='space-between'
								alignItems='center'
								className={styles.product_item_quantity_wrapper}>
								<i
									className={`bx bx-minus ${styles.product_item_quantity_box} ${
										styles.product_item_quantity_icon
									} ${
										item.quantity <= 1
											? styles.product_item_quantity_icon_disabled
											: ''
									}
                        `}></i>
								<span
									className={`${styles.product_item_quantity_box} ${styles.product_item_quantity_number} `}>
									{item.quantity}
								</span>
								<i
									className={`bx bx-plus ${styles.product_item_quantity_box} ${styles.product_item_quantity_icon}`}></i>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			))}

			<Flex justifyContent='space-between' className={styles.total}>
				<span>Tính tạm ({total} sản phẩm):</span>
				<span>{numberWithCommas(priceTotal)}₫</span>
			</Flex>
		</>
	)
}

export default CartItem
