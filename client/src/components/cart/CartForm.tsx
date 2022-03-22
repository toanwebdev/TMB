import {
	Box,
	Flex,
	Grid,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IMenu } from '../../interface/menu'
import styles from '../../styles/cart/CartForm.module.scss'
import CartFormMenuItem from './CartFormMenuItem'

interface ICartFormProps {
	cities: IMenu[]
}

const CartForm = ({ cities }: ICartFormProps) => {
	const [radio, setRadio] = useState('0')

	return (
		<Box className={styles.wrapper}>
			<span className={styles.title}>thông tin khách hàng</span>

			<RadioGroup defaultValue='1' className={styles.form_radio_wrapper}>
				<Stack spacing={5} direction='row'>
					<Radio
						value='0'
						className={styles.form_radio}
						onClick={() => setRadio('0')}
						isChecked={radio == '0'}>
						<span className={styles.form_radio_label}>Anh</span>
					</Radio>
					<Radio
						value='1'
						className={styles.form_radio}
						onClick={() => setRadio('1')}
						isChecked={radio == '1'}>
						<span className={styles.form_radio_label}>Chị</span>
					</Radio>
				</Stack>
			</RadioGroup>

			<Stack spacing={3} direction='row' className={styles.form_input_wrapper}>
				<Input placeholder='Họ và tên' className={styles.form_input} />
				<Input placeholder='Số điện thoại' className={styles.form_input} />
			</Stack>

			<span className={styles.title}>địa chỉ nhận hàng</span>

			<Grid
				templateColumns='repeat(2, 1fr)'
				templateRows='repeat(2, 1fr)'
				gap='10px'
				className={styles.form_address_wrapper}>
				<CartFormMenuItem
					menus={cities}
					initAddress={{ id: '-1', name: 'Chọn tỉnh, thành phố' }}
					placeholder='Nhập tỉnh, thành để tìm kiếm nhanh'
				/>
				<CartFormMenuItem
					menus={cities}
					initAddress={{ id: '-1', name: 'Chọn quận, huyện' }}
					placeholder='Nhập quận, huyện để tìm kiếm nhanh'
				/>
				<CartFormMenuItem
					menus={cities}
					initAddress={{ id: '-1', name: 'Chọn phường, xã' }}
					placeholder='Nhập phường, xã để tìm kiếm nhanh'
				/>
				<Input placeholder='Số nhà, tên đường' className={styles.form_input} />
			</Grid>

			<span className={styles.title}>Ghi chú</span>

			<Box className={styles.form_textarea}>
				<Textarea placeholder='Ghi chú' className={styles.form_input} />
			</Box>

			<Flex alignItems='center'>
				<i className={`bx bx-check-square ${styles.check_icon}`}></i>
				<span>Miễn phí vận chuyển</span>
			</Flex>
			<Flex alignItems='center'>
				<i className={`bx bx-check-square ${styles.check_icon}`}></i>
				<span>Giao hàng thông thường (Trong vòng 72h)</span>
			</Flex>
		</Box>
	)
}

export default CartForm
