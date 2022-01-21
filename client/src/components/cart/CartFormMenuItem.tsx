import {
	Box,
	Grid,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IMenu } from '../../interface/menu'
import styles from '../../styles/cart/CartFormMenuItem.module.scss'

interface ICartFormMenuItemProps {
	menus: IMenu[]
	initAddress: string
	placeholder: string
}

const CartFormMenuItem = ({
	menus,
	initAddress,
	placeholder,
}: ICartFormMenuItemProps) => {
	const [address, setAddress] = useState(initAddress)

	return (
		<Menu>
			<MenuButton className={styles.form_menu_btn}>
				<span>{address}</span>
				<i className={`bx bx-chevron-down ${styles.form_menu_btn_icon}`}></i>
			</MenuButton>
			<MenuList className={styles.form_menu_list}>
				<Box className={styles.form_menu_search}>
					<Input placeholder={placeholder} className={styles.form_input} />
					<i className={`bx bx-search-alt ${styles.form_menu_search_icon}`}></i>
				</Box>
				<Grid
					templateColumns='repeat(2, 1fr)'
					className={styles.form_menu_content_wrapper}>
					{menus.map((item) => (
						<MenuItem key={item.id} onClick={() => setAddress(item.name)}>
							{item.name}
						</MenuItem>
					))}
				</Grid>
			</MenuList>
		</Menu>
	)
}

export default CartFormMenuItem
