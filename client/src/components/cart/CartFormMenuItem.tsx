import {
	Box,
	Grid,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { IMenu } from '../../interface/menu'
import styles from '../../styles/cart/CartFormMenuItem.module.scss'

interface ICartFormMenuItemProps {
	menus?: IMenu[]
	initAddress: IMenu
	placeholder: string
	changeAddress?: any
}

const CartFormMenuItem = ({
	menus,
	initAddress,
	placeholder,
	changeAddress,
}: ICartFormMenuItemProps) => {
	const [address, setAddress] = useState(initAddress)
	const [searchTerm, setSearchTerm] = useState('')
	const searchTimeOutRef: any = useRef('')
	const [menuArray, setMenuArray] = useState(menus)

	useEffect(() => {
		setMenuArray(menus)
		setAddress(initAddress)
	}, [menus])

	if (changeAddress) {
		useEffect(() => {
			changeAddress(address.id)
		}, [address])
	}

	const handleSearch = (e: any) => {
		setSearchTerm(e.target.value)

		if (searchTimeOutRef.current) {
			clearTimeout(searchTimeOutRef.current)
		}

		searchTimeOutRef.current = setTimeout(() => {
			if (searchTerm && menus) {
				const newArray = menus.filter((item) =>
					item.name.toLowerCase().includes(searchTerm.toLowerCase()),
				)
				setMenuArray(newArray)
			}
		}, 300)
	}

	return (
		<Menu>
			<MenuButton className={styles.form_menu_btn} type='button'>
				<span>{address.name}</span>
				<i className={`bx bx-chevron-down ${styles.form_menu_btn_icon}`}></i>
			</MenuButton>
			<MenuList className={styles.form_menu_list}>
				<Box className={styles.form_menu_search}>
					<Input
						placeholder={placeholder}
						className={styles.form_input}
						value={searchTerm}
						onChange={handleSearch}
					/>
					<i className={`bx bx-search-alt ${styles.form_menu_search_icon}`}></i>
				</Box>
				<Grid
					templateColumns='repeat(2, 1fr)'
					className={styles.form_menu_content_wrapper}>
					{menuArray &&
						menuArray.map((item) => (
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
