import {
	Box,
	Button,
	Checkbox,
	Flex,
	Grid,
	Link,
	Select,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react'
import { Editor } from '@tinymce/tinymce-react'
import { Field, Form, Formik } from 'formik'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import slugify from 'slugify'
import {
	useBrandAllQuery,
	useCategoryAllQuery,
	useColorAllQuery,
	useSingleUploadMutation,
} from '../../../generated/graphql'
import { IProduct } from '../../../interface/product'
import styles from '../../../styles/Admin/product/AddOrEdit.module.scss'
import InputField from '../../InputField'
import UploadImage from './UploadImage'

interface IAddOrEditProductProps {
	item?: IProduct
}

const AddOrEditProduct = ({ item }: IAddOrEditProductProps) => {
	const [nameProduct, setNameProduct] = useState('')
	const [slugProduct, setSlugProduct] = useState('')
	const [description, setDescription] = useState(item?.description)
	const [categoryId, setCategoryId] = useState('-1')

	const initColors: Array<{ id: string; name: string }> = []
	const [colors, setColors] = useState(initColors)

	const initFiles: Array<{
		id: string
		fileItems: Array<any>
		images: Array<string>
	}> = []
	const [files, setFiles] = useState(initFiles)
	console.log(files)

	const initialValues = {
		name: item ? item.name : '',
		slug: item ? item.slug : '',
		avatar: item ? item.avatar : '',
		price_input: item ? item.price_input : 0,
		discount: item ? item.discount : 0,
		price: item ? item.price : 0,
		gift: item ? item.gift : 0,
		categoryId: item ? item.categoryId : -1,
		brandId: item ? item.brandId : -1,
		installment: item?.installment,
		best_sell: item?.best_sell,
		highlight: item?.highlight,
		new: item?.new,
	}

	const [singleUpload] = useSingleUploadMutation()
	const { data: categoryAllData } = useCategoryAllQuery()
	const { data: brandAllData } = useBrandAllQuery({
		variables: { categoryId: parseInt(categoryId) },
	})
	const { data: colorAllData } = useColorAllQuery()

	const handleUpload = (cb: any) => {
		let input = document.createElement('input')
		input.setAttribute('type', 'file')
		input.setAttribute('accept', 'image/*')

		input.onchange = async (e: any) => {
			const file = e.target.files[0]
			if (file) {
				await singleUpload({
					variables: {
						file,
					},
					update(_cache, { data }) {
						if (data?.singleUpload) {
							cb(data.singleUpload)
						}
					},
				})
			}
		}

		input.click()
	}

	const handleEditorChange = (e: any) => {
		setDescription(e.target.getContent())
	}

	const handleChecked = (e: any) => {
		if (colors.length > 0) {
			let checkColor = false
			for (let i = 0; i < colors.length; i++) {
				if (
					colors[i].id === e.target.value &&
					colors[i].name === e.target.name
				) {
					checkColor = true
					colors.splice(i, 1)
					setColors([...colors])
					break
				}
			}

			if (!checkColor) {
				setColors([...colors, { id: e.target.value, name: e.target.name }])
			}
		} else {
			setColors([...colors, { id: e.target.value, name: e.target.name }])
		}
	}

	const handleUploadImage = (
		id: string,
		file: any,
		image: string,
		del: boolean,
		index: number,
	) => {
		if (!del) {
			if (files.length !== 0) {
				let checkFile = false
				for (let i = 0; i < files.length; i++) {
					if (files[i].id === id) {
						if (id === '-1') {
							files[i].fileItems[0] = file
							files[i].images[0] = image
						} else {
							files[i].fileItems = [...files[i].fileItems, file]
							files[i].images = [...files[i].images, image]
						}

						checkFile = true
						setFiles([...files])
						break
					}
				}

				if (!checkFile) {
					setFiles([...files, { id, fileItems: [file], images: [image] }])
				}
			} else {
				setFiles([{ id, fileItems: [file], images: [image] }])
			}
		} else {
			for (let i = 0; i < files.length; i++) {
				if (files[i].id === id) {
					files[i].fileItems.splice(index, 1)
					files[i].images.splice(index, 1)
					setFiles([...files])
					break
				}
			}
		}
	}

	const findCountById = (id: string) => {
		if (files.length !== 0) {
			for (let i = 0; i < files.length; i++) {
				if (files[i].id === id) {
					return files[i].fileItems.length + 1
				}
			}
		}

		return 1
	}

	const findImagesById = (id: string) => {
		if (files.length !== 0) {
			for (let i = 0; i < files.length; i++) {
				if (files[i].id === id) {
					return files[i].images
				}
			}
		}

		return ''
	}

	const findFilesById = (id: string) => {
		if (files.length !== 0) {
			for (let i = 0; i < files.length; i++) {
				if (files[i].id === id) {
					return files[i].fileItems
				}
			}
		}

		return ''
	}

	const onAddOrEditProductSubmit = async (values: any) => {
		const updateValues = {
			...values,
			name: nameProduct,
			slug: slugProduct,
			price_input: parseInt(values.price_input),
			price: parseInt(values.price),
			discount: parseInt(values.discount),
			gift: parseInt(values.gift),
			categoryId: parseInt(categoryId),
			brandId: parseInt(values.brandId),
		}
		console.log(updateValues)
	}

	useEffect(() => {
		setSlugProduct(slugify(nameProduct))
	}, [nameProduct])

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
									value={nameProduct}
									isRequired
									onChange={(e: any) => setNameProduct(e.target.value)}
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
									value={slugProduct}
									onChange={(e: any) => setSlugProduct(e.target.value)}
									isRequired
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
								<Field
									as={Select}
									name='categoryId'
									placeholder='Chọn loại sản phẩm'
									value={categoryId}
									onChange={(e: any) => setCategoryId(e.target.value)}
									isRequired>
									{categoryAllData?.categoryAll.map((item) => (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									))}
								</Field>
							</Box>
							{/* loại sản phẩm */}

							{/* thương hiệu */}
							<Box mt={4}>
								<Box mb={2} className={styles.name}>
									Thương hiệu
									<span className={styles.name_required}>*</span>
								</Box>
								<Field
									as={Select}
									name='brandId'
									placeholder='Chọn thương hiệu'
									isRequired>
									{brandAllData?.brandAll.map((item) => (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									))}
								</Field>
								{/* thương hiệu */}
							</Box>
						</Grid>

						<Grid templateColumns='repeat(2, 1fr)' gap='80px'>
							{/* avatar */}
							<Box mt={4}>
								<Box mb={2} className={styles.name}>
									Ảnh đại diện
									<span className={styles.name_required}>*</span>
								</Box>
								<UploadImage
									id='-1'
									index={0}
									name={
										findFilesById('-1').length > 0
											? findFilesById('-1')[0].name
											: ''
									}
									value={
										findImagesById('-1').length > 0
											? findImagesById('-1')[0]
											: ''
									}
									handleUploadImage={handleUploadImage}
								/>
							</Box>
							{/* avatar */}

							{/* color */}
							<Box mt={4}>
								<Box mb={2} className={styles.name}>
									Bảng màu
									<span className={styles.name_required}>*</span>
								</Box>
								<Grid templateColumns='repeat(2, 1fr)' gap='10px'>
									{colorAllData?.colorAll.map((item) => (
										<Checkbox
											key={item.id}
											name={item.name}
											value={item.id}
											onChange={handleChecked}>
											{item.name}
										</Checkbox>
									))}
								</Grid>
							</Box>
							{/* color */}
						</Grid>

						{/* image color */}

						<Box mt={4} className={colors.length > 0 ? styles.hidden : ''}>
							<Box mb={2} className={styles.name}>
								Ảnh sản phẩm
								<span className={styles.name_required}>*</span>
							</Box>

							<Tabs isFitted>
								<TabList>
									{colors.map((item) => (
										<Tab key={item.id}>{item.name}</Tab>
									))}
								</TabList>

								<TabPanels>
									{colors.map((item) => (
										<TabPanel key={item.id}>
											<Grid templateColumns='repeat(5, 1fr)' gap='20px'>
												{[...Array(findCountById(item.id))].map((_, index) => (
													<UploadImage
														key={index}
														item
														index={index}
														id={item.id}
														name={
															findFilesById(item.id).length > 0
																? index < findFilesById(item.id).length
																	? findFilesById(item.id)[index].name
																	: ''
																: ''
														}
														value={
															findImagesById(item.id).length > 0
																? index < findImagesById(item.id).length
																	? findImagesById(item.id)[index]
																	: ''
																: ''
														}
														handleUploadImage={handleUploadImage}
													/>
												))}
											</Grid>
										</TabPanel>
									))}
								</TabPanels>
							</Tabs>
						</Box>

						{/* image color */}

						{/* description */}
						<Box mt={4}>
							<Box mb={2} className={styles.name}>
								Thông tin sản phẩm
							</Box>
							<Editor
								apiKey='1gm4ec14ey357xtl0d0kgqq7wrgep8xwarpr5pmjbihmkvx7'
								initialValue={description}
								init={{
									height: 500,
									menubar: true,
									plugins: [
										'advlist autolink lists link image',
										'charmap print preview anchor help',
										'searchreplace visualblocks code',
										'insertdatetime media table paste wordcount',
									],
									toolbar:
										'undo redo | link image media | code | formatselect |fontselect | fontsizeselect | bold italic underline | \
										alignleft aligncenter alignright | \
										bullist numlist outdent indent | help',
									automatic_uploads: true,
									file_picker_types: 'image media',
									file_picker_callback: handleUpload,
								}}
								onChange={handleEditorChange}
							/>
						</Box>
						{/* description */}

						<Stack spacing={[1, 5]} direction={['column', 'row']} mt={4}>
							<Field
								as={Checkbox}
								name='installment'
								defaultChecked={item?.installment}>
								Trả góp
							</Field>
							<Field
								as={Checkbox}
								name='best_sell'
								defaultChecked={item?.best_sell}>
								Bán chạy
							</Field>
							<Field
								as={Checkbox}
								name='highlight'
								defaultChecked={item?.highlight}>
								Nổi bật
							</Field>
							<Field as={Checkbox} name='new' defaultChecked={item?.new}>
								Mới nhất
							</Field>
						</Stack>

						<Flex justifyContent='flex-end' alignItems='center'>
							<Button
								colorScheme='blue'
								mr={3}
								type='submit'
								isLoading={isSubmitting}>
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
