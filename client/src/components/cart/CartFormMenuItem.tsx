import {
	Box,
	Grid,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IMenu } from '../../interface/menu'
import styles from '../../styles/cart/CartFormMenuItem.module.scss'

interface ICartFormMenuItemProps {
	menus?: IMenu[]
	initAddress: string
	placeholder: string
	changeAddress?: any
}

const CartFormMenuItem = ({
	menus,
	initAddress,
	placeholder,
	changeAddress,
}: ICartFormMenuItemProps) => {
	const [address, setAddress] = useState({ id: '-1', name: initAddress })
	const [key, setKey] = useState('')
	console.log(key)

	if (changeAddress) {
		useEffect(() => {
			changeAddress(address.id)
		}, [address])
	}

	return (
		<Menu>
			<MenuButton className={styles.form_menu_btn}>
				<span>{address.name}</span>
				<i className={`bx bx-chevron-down ${styles.form_menu_btn_icon}`}></i>
			</MenuButton>
			<MenuList className={styles.form_menu_list}>
				<Box className={styles.form_menu_search}>
					<Input
						placeholder={placeholder}
						className={styles.form_input}
						onChange={(e: any) => setKey(e.target.value)}
					/>
					<i className={`bx bx-search-alt ${styles.form_menu_search_icon}`}></i>
				</Box>
				<Grid
					templateColumns='repeat(2, 1fr)'
					className={styles.form_menu_content_wrapper}>
					{menus &&
						menus.map((item) => (
							<MenuItem key={item.id} onClick={() => setAddress(item)}>
								{item.name}
							</MenuItem>
						))}
				</Grid>
			</MenuList>
		</Menu>
	)
}

export default CartFormMenuItem
