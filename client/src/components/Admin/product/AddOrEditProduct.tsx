import {
	Box,
	Button,
	Checkbox,
	Flex,
	Grid,
	Link,
	Select,
	Stack,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import { useState } from 'react'
import { IProduct } from '../../../interface/product'
import styles from '../../../styles/Admin/product/AddOrEdit.module.scss'
import InputField from '../../InputField'

interface IAddOrEditProductProps {
	item?: IProduct
}

const AddOrEditProduct = ({ item }: IAddOrEditProductProps) => {
	const [checkBox, setCheckBox] = useState({
		installment: item ? item.installment : false,
		best_sell: item ? item.best_sell : false,
		highlight: item ? item.highlight : false,
		new: item ? item.new : false,
	})

	const initialValues = {
		name: item ? item.name : '',
		slug: item ? item.slug : '',
		avatar: item ? item.avatar : '',
		description: item ? item.description : '',
		price_input: item ? item.price_input : '',
		discount: item ? item.discount : '',
		price: item ? item.price : '',
		gift: item ? item.gift : '',
		brandId: item ? item.brandId : -1,
	}

	const onAddOrEditProductSubmit = async () => {}

	return (
		<Box className={styles.wrapper}>
			<Box className={styles.title}>
				{item ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm'}
			</Box>

			<Formik initialValues={initialValues} onSubmit={onAddOrEditProductSubmit}>
				{({ isSubmitting }) => (
					<Form>
						<Grid templateColumns='repeat(2, 1fr)' gap='80px'>
							{/* name */}
							<Box mt={4}>
								<InputField
									name='name'
									placeholder='Tên sản phẩm'
									label='Tên sản phẩm'
									type='text'
									isRequired
								/>
							</Box>
							{/* name */}

							{/* slug */}
							<Box mt={4}>
								<InputField
									name='slug'
									placeholder='Slug'
									label='Slug'
									type='text'
									isRequired
									isDisabled
								/>
							</Box>
							{/* slug */}
						</Grid>

						<Grid templateColumns='repeat(2, 1fr)' gap='80px'>
							{/* price input */}
							<Box mt={4} className={styles.price_wrapper}>
								<InputField
									name='price_input'
									placeholder='Giá nhập'
									label='Giá nhập'
									type='text'
									isRequired
								/>
								<span className={styles.price_vnd}>VNĐ</span>
							</Box>
							{/* price input */}

							{/* price */}
							<Box mt={4} className={styles.price_wrapper}>
								<InputField
									name='price'
									placeholder='Giá bán'
									label='Giá bán'
									type='text'
									isRequired
								/>
								<span className={styles.price_vnd}>VNĐ</span>
							</Box>
							{/* price */}
						</Grid>

						<Grid templateColumns='repeat(2, 1fr)' gap='80px'>
							{/*discount */}
							<Box mt={4} className={styles.price_wrapper}>
								<InputField
									name='discount'
									placeholder='Giảm giá'
									label='Giảm giá'
									type='text'
								/>
								<span className={styles.price_vnd}>VNĐ</span>
							</Box>
							{/* discount */}

							{/* gift */}
							<Box mt={4} className={styles.price_wrapper}>
								<InputField
									name='gift'
									placeholder='Quà tặng'
									label='Quà tặng'
									type='text'
								/>
								<span className={styles.price_vnd}>VNĐ</span>
							</Box>
							{/* gift */}
						</Grid>

						<Grid templateColumns='repeat(2, 1fr)' gap='80px'>
							{/* loại sản phẩm */}
							<Box mt={4}>
								<Box mb={2} className={styles.name}>
									Loại sản phẩm
									<span className={styles.name_required}>*</span>
								</Box>
								<Select placeholder='Chọn loại sản phẩm' isRequired>
									<option value='option1'>Option 1</option>
									<option value='option2'>Option 2</option>
									<option value='option3'>Option 3</option>
								</Select>
							</Box>
							{/* loại sản phẩm */}

							{/* thương hiệu */}
							<Box mt={4}>
								<Box mb={2} className={styles.name}>
									Thương hiệu
									<span className={styles.name_required}>*</span>
								</Box>
								<Select placeholder='Chọn thương hiệu' isRequired>
									<option value='option1'>Option 1</option>
									<option value='option2'>Option 2</option>
									<option value='option3'>Option 3</option>
								</Select>
								{/* thương hiệu */}
							</Box>
						</Grid>

						{/* mô tả */}

						{/* mô tả */}

						<Stack spacing={[1, 5]} direction={['column', 'row']} mt={4}>
							<Checkbox
								name='installment'
								defaultChecked={checkBox.installment}
								onChange={(e: any) =>
									setCheckBox({
										...checkBox,
										[e.target.name]: e.target.checked,
									})
								}>
								Trả góp
							</Checkbox>
							<Checkbox
								name='best_sell'
								defaultChecked={checkBox.best_sell}
								onChange={(e: any) =>
									setCheckBox({
										...checkBox,
										[e.target.name]: e.target.checked,
									})
								}>
								Bán chạy
							</Checkbox>
							<Checkbox
								name='highlight'
								defaultChecked={checkBox.highlight}
								onChange={(e: any) =>
									setCheckBox({
										...checkBox,
										[e.target.name]: e.target.checked,
									})
								}>
								Nổi bật
							</Checkbox>
							<Checkbox
								name='new'
								defaultChecked={checkBox.new}
								onChange={(e: any) =>
									setCheckBox({
										...checkBox,
										[e.target.name]: e.target.checked,
									})
								}>
								Mới nhất
							</Checkbox>
						</Stack>

						<Flex justifyContent='flex-end' alignItems='center'>
							<Button colorScheme='blue' mr={3} type='submit'>
								Thêm
							</Button>

							<NextLink href='/quan-tri/san-pham' passHref>
								<Link>
									<Button colorScheme='red'>Hủy</Button>
								</Link>
							</NextLink>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	)
}

export default AddOrEditProduct
