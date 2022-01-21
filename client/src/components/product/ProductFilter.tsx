import {
	Box,
	Flex,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Radio,
	RadioGroup,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'
import { IFilterMore } from '../../interface/filter'
import { IImage } from '../../interface/image'
import { IMenu } from '../../interface/menu'
import styles from '../../styles/product/ProductFilter.module.scss'

interface IProductFilterProps {
	filterImgs: IImage[]
	filterTotal: number
	filterPrices: number[]
	filterMenus: IMenu[]
	filterMores: IFilterMore[]
}

const ProductFilter = ({
	filterImgs,
	filterTotal,
	filterPrices,
	filterMenus,
	filterMores,
}: IProductFilterProps) => {
	const [priceRadio, setPriceRadio] = useState(-1)
	const [menuValue, setMenuValue] = useState('Sắp xếp theo')
	const [showFilter, setShowFilter] = useState(false)

	const initMoresRadio = () => {
		let init: Record<string, any> = {}
		for (let i = 0; i < filterMores.length; i++) {
			init = { ...init, [filterMores[i].key]: -1 }
		}
		return init
	}
	const [moresRadio, setMoresRadio] = useState(initMoresRadio)

	return (
		<Box className={styles.wrapper}>
			{/* brand */}
			<Flex flexWrap='wrap'>
				{filterImgs.map((item) => (
					<NextLink href='/' passHref key={item.id}>
						<Link className={styles.brand_item_img_wrapper}>
							<img
								src={item.link}
								alt={item.name}
								className={styles.brand_item_img}
							/>
						</Link>
					</NextLink>
				))}
			</Flex>
			{/* brand */}

			{/* filter */}
			<Box className={styles.filter_wrapper}>
				<Flex alignItems='center' className={styles.filter}>
					<span className={styles.filter_total_wrapper}>
						Có <label className={styles.filter_total}>{filterTotal}</label> sản
						phẩm
					</span>

					<RadioGroup
						onChange={(value) => setPriceRadio(parseInt(value))}
						value={priceRadio}
						className={styles.filter_radio_wrapper}>
						{filterPrices.map((item, index: number) => (
							<Radio
								value={index}
								key={index}
								size='sm'
								className={styles.filter_radio}>
								{(index === 0 && `Dưới ${filterPrices[index + 1]} triệu`) ||
									(index === filterPrices.length - 1 && `Trên ${item} triệu`) ||
									(index !== 0 &&
										`Từ ${item} đến ${filterPrices[index + 1]} triệu`)}
							</Radio>
						))}
					</RadioGroup>

					<Flex
						justifyContent='space-between'
						alignItems='center'
						className={styles.filter_menu_wrapper}>
						<Flex
							alignItems='center'
							className={`${styles.filter_btn} ${
								showFilter ? styles.filter_btn_active : ''
							}`}
							onClick={() => setShowFilter(!showFilter)}>
							<i className={`bx bx-slider-alt ${styles.filter_btn_icon}`}></i>
							<span>Bộ lọc</span>
						</Flex>

						<Menu>
							<MenuButton className={styles.filter_menu_btn}>
								<span>{menuValue}</span>
								<i
									className={`bx bx-chevron-down ${styles.filter_menu_btn_icon}`}></i>
							</MenuButton>
							<MenuList className={styles.filter_menu_list}>
								{filterMenus.map((item) => (
									<MenuItem
										key={item.id}
										onClick={() => setMenuValue(item.name)}>
										{item.name}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				<Box
					className={`${styles.filter_show_wrapper} ${
						showFilter ? styles.filter_show_wrapper_active : ''
					}`}>
					{filterMores.map((item) => (
						<Box key={item.id} className={styles.filter_show_item}>
							<span className={styles.filter_show_item_title}>
								{item.title}
							</span>
							<RadioGroup
								onChange={(value) =>
									setMoresRadio({
										...moresRadio,
										[item.key]: parseInt(value),
									})
								}
								value={moresRadio[item.key]}
								className={`${styles.filter_radio_wrapper} ${styles.filter_show_item_radio_wrapper}`}>
								{item.contents.map((i, idx: number) => (
									<Radio
										value={idx}
										key={idx}
										size='sm'
										className={`${styles.filter_radio} ${styles.filter_show_item_radio}`}>
										{i}
									</Radio>
								))}
							</RadioGroup>
						</Box>
					))}
				</Box>
			</Box>
			{/* filter */}
		</Box>
	)
}

export default ProductFilter
