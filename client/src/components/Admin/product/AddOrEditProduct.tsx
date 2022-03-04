import {
	Box,
	Button,
	Checkbox,
	Flex,
	Grid,
	IconButton,
	Input,
	Link,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
	Spinner,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Textarea,
	Tooltip,
} from '@chakra-ui/react'
import { Editor } from '@tinymce/tinymce-react'
import { Field, Form, Formik } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
	useAddProductColorsMutation,
	useAddProductImagesMutation,
	useAddProductMutation,
	useAddPromotionMutation,
	useAddSpecificationsMutation,
	useBrandByIdsQuery,
	useBrandCategoriesQuery,
	useCategoryAllQuery,
	useColorAllQuery,
	useColorByIdsQuery,
	useMultipleUploadMutation,
	useSingleUploadMutation,
} from '../../../generated/graphql'
import { IGetProduct } from '../../../interface/product'
import { initializeApollo } from '../../../lib/apolloClient'
import styles from '../../../styles/Admin/product/AddOrEdit.module.scss'
import slugify from '../../../utils/slugify'
import { useCheckAuth } from '../../../utils/useCheckAuth'
import InputField from '../../InputField'
import UploadImage from './UploadImage'

interface IAddOrEditProductProps {
	product?: IGetProduct
}

const AddOrEditProduct = ({ product }: IAddOrEditProductProps) => {
	const router = useRouter()
	const { data: authData, loading: authLoading } = useCheckAuth()

	const initName = product ? product.name : ''
	const [nameProduct, setNameProduct] = useState(initName)

	const initSlug = product ? product.slug : ''
	const [slugProduct, setSlugProduct] = useState(initSlug)
	const initDescription = product ? product.description : ''
	const [description, setDescription] = useState(initDescription)

	const initCategoryId = product ? product.category.id : '-1'
	const [categoryId, setCategoryId] = useState(initCategoryId)

	let colorIds: Array<number> = []
	if (product && product.product_colors) {
		for (let i = 0; i < product.product_colors.length; i++) {
			colorIds = [...colorIds, product.product_colors[i].colorId as number]
		}
	}

	let initColors: Array<{ id: string; name: string }> = []
	const [colors, setColors] = useState(initColors)
	const { data: colorByIdsData, loading: colorByIdsLoading } =
		useColorByIdsQuery({
			variables: {
				colorByIdsInput: { colorIds: colorIds.length === 0 ? [-1] : colorIds },
			},
		})

	useEffect(() => {
		if (colorByIdsData && colorByIdsData.colorByIds) {
			setColors(colorByIdsData.colorByIds)
		}
	}, [colorByIdsLoading])

	let initFiles: Array<{
		id: string
		fileItems: Array<any>
		images: Array<string>
	}> = [{ id: '-1', fileItems: [''], images: [product ? product.avatar : ''] }]
	const [files, setFiles] = useState(initFiles)

	useEffect(() => {
		if (product && product.product_images) {
			let index = 0
			for (let i = 0; i < product.product_images.length; i++) {
				if (
					initFiles[index].id === product.product_images[i].colorId.toString()
				) {
					initFiles.splice(index, 1, {
						id: initFiles[index].id,
						fileItems: [...initFiles[index].fileItems, ''],
						images: [
							...initFiles[index].images,
							product.product_images[i].link,
						],
					})
				} else {
					index++
					initFiles.push({
						id: product.product_images[i].colorId.toString(),
						fileItems: [''],
						images: [product.product_images[i].link],
					})
				}
			}

			setFiles(initFiles)
		}
	}, [])

	let initSpecis: Array<{ name: string; content: string }> = [
		{ name: '', content: '' },
	]
	const [specis, setSpecis] = useState(initSpecis)

	useEffect(() => {
		if (product && product.specificationses) {
			initSpecis = []
			for (let i = 0; i < product.specificationses.length; i++) {
				initSpecis = [
					...initSpecis,
					{
						name: product.specificationses[i].name,
						content: product.specificationses[i].content,
					},
				]
			}

			setSpecis(initSpecis)
		}
	}, [])

	let initPromotions: Array<string> = ['']
	const [promotions, setPromotions] = useState(initPromotions)

	useEffect(() => {
		if (product && product.promotions) {
			initPromotions = []
			for (let i = 0; i < product.promotions.length; i++) {
				initPromotions = [...initPromotions, product.promotions[i].content]
			}

			setPromotions(initPromotions)
		}
	}, [])

	const initialValues = {
		name: product ? product.name : '',
		slug: product ? product.slug : '',
		avatar: product ? product.avatar : '',
		description: product ? product.description : '',
		price_input: product ? product.price_input.toString() : '0',
		discount: product ? (product.discount as number).toString() : '0',
		price: product ? product.price.toString() : '0',
		gift: product ? (product.gift as number).toString() : '0',
		quantity: product ? product.quantity.toString() : '0',
		categoryId: product ? product.category.id : '-1',
		brandId: product ? product.brand.id : '-1',
		installment: product ? product.installment : false,
		best_sell: product ? product.best_sell : false,
		highlight: product ? product.highlight : false,
		new: product ? product.new : false,
		userCreatedId: product
			? parseInt(product.user_created.id)
			: parseInt(authData?.me?.id as string),
		userUpdatedId: parseInt(authData?.me?.id as string),
	}

	const [singleUpload] = useSingleUploadMutation()
	const { data: categoryAllData } = useCategoryAllQuery()
	const { data: brandCategoriesData } = useBrandCategoriesQuery({
		variables: { categoryId: parseInt(categoryId) },
	})
	let brandIds: Array<number> = []
	let brandCategories = brandCategoriesData
		? brandCategoriesData.brandCategories
		: []
	for (let i = 0; i < brandCategories.length; i++) {
		brandIds = [...brandIds, brandCategories[i].brandId as number]
	}

	const { data: brandByIdsData } = useBrandByIdsQuery({
		variables: { brandByIdsInput: { brandIds } },
	})
	const { data: colorAllData } = useColorAllQuery()

	const [multipleUpload] = useMultipleUploadMutation()
	const [addProductColors] = useAddProductColorsMutation()
	const [addProductImages] = useAddProductImagesMutation()
	const [addProduct] = useAddProductMutation()
	const [addSpecifications] = useAddSpecificationsMutation()
	const [addPromotion] = useAddPromotionMutation()

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
						if (id !== '-1') {
							files[i].fileItems.splice(index + 1, 0, file)
							files[i].images.splice(index + 1, 0, image)
						} else {
							files[i].fileItems.splice(index, 1, file)
							files[i].images.splice(index, 1, image)
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
					if (id !== '-1') {
						files[i].fileItems.splice(index, 1, 'del')
						files[i].images.splice(index, 1, 'del')
					} else {
						files[i].fileItems.splice(index, 1, 'del', '')
						files[i].images.splice(index, 1, 'del', '')
					}
					setFiles([...files])
					break
				}
			}
		}
	}

	const findImagesById = (id: string) => {
		if (files.length !== 0) {
			for (let i = 0; i < files.length; i++) {
				if (files[i].id === id) {
					return files[i].images
				}
			}
		}

		return []
	}

	const findFilesById = (id: string) => {
		if (files.length !== 0) {
			for (let i = 0; i < files.length; i++) {
				if (files[i].id === id) {
					return files[i].fileItems
				}
			}
		}

		return []
	}

	const handleChangeSpeci = (e: any, index: number) => {
		if (e.target.name === 'name') {
			specis.splice(index, 1, {
				name: e.target.value,
				content: specis[index].content,
			})
		} else {
			specis.splice(index, 1, {
				name: specis[index].name,
				content: e.target.value,
			})
		}

		setSpecis([...specis])
	}

	const handleClickSpeci = (index: number, action: string) => {
		if (action === 'add') {
			specis.splice(index + 1, 0, { name: '', content: '' })
		} else {
			specis.splice(index, 1, { name: 'del', content: 'del' })
		}

		setSpecis([...specis])
	}

	const handleChangePromotion = (e: any, index: number) => {
		promotions.splice(index, 1, e.target.value)
		setPromotions([...promotions])
	}

	const handleClickPromotion = (index: number, action: string) => {
		if (action === 'add') {
			promotions.splice(index + 1, 0, '')
		} else {
			promotions.splice(index, 1, 'del')
		}

		setPromotions([...promotions])
	}

	const onAddOrEditProductSubmit = async (values: any) => {
		let fileUploads: Array<any> = []

		for (let i = 0; i < files.length; i++) {
			for (let j = 0; j < files[i].fileItems.length; j++) {
				if (files[i].fileItems[j] !== 'del') {
					fileUploads = [...fileUploads, files[i].fileItems[j]]
				}
			}
		}

		const multipleUploadData = await multipleUpload({
			variables: {
				files: fileUploads,
			},
		})

		let avatar = multipleUploadData.data
			? (multipleUploadData.data?.multipleUpload[0] as string)
			: ''

		const updateValues = {
			...values,
			name: nameProduct,
			slug: slugProduct,
			avatar,
			categoryId: parseInt(categoryId),
			brandId: parseInt(values.brandId),
			price_input: parseInt(values.price_input),
			discount: parseInt(values.discount),
			price: parseInt(values.price),
			gift: parseInt(values.gift),
			quantity: parseInt(values.quantity),
			description,
		}

		const addProductData = await addProduct({
			variables: {
				addProductInput: updateValues,
			},
		})

		let colorIds: Array<number> = []
		for (let i = 0; i < colors.length; i++) {
			colorIds = [...colorIds, parseInt(colors[i].id)]
		}

		await addProductColors({
			variables: {
				addProductColorsInput: {
					productId: parseInt(
						addProductData.data?.addProduct.product?.id as string,
					),
					colorIds,
				},
			},
		})

		let colorLinks: Array<{ id: number; links: string[] }> = []
		let vtColor = 0
		for (let i = 1; i < files.length; i++) {
			let newColorLinks: { id: number; links: string[] } = {
				id: -1,
				links: [],
			}

			newColorLinks.id = parseInt(files[i].id)
			for (let j = 0; j < files[i].fileItems.length; j++) {
				if (files[i].fileItems[j] !== '' && files[i].fileItems[j] !== 'del') {
					vtColor++
					newColorLinks.links = [
						...newColorLinks.links,
						multipleUploadData.data?.multipleUpload[vtColor] as string,
					]
				}
			}
			colorLinks = [...colorLinks, newColorLinks]
		}

		await addProductImages({
			variables: {
				addProductImagesInput: {
					productId: parseInt(
						addProductData.data?.addProduct.product?.id as string,
					),
					colorLinks,
				},
			},
		})

		let newSpecis: Array<{ name: string; content: string }> = []
		for (let i = 0; i < specis.length; i++) {
			if (specis[i].name !== '' && specis[i].name !== 'del') {
				newSpecis = [...newSpecis, specis[i]]
			}
		}
		await addSpecifications({
			variables: {
				addSpecificationsInput: {
					productId: parseInt(
						addProductData.data?.addProduct.product?.id as string,
					),
					specis: newSpecis,
				},
			},
		})

		let newPromotions: Array<string> = []
		for (let i = 0; i < promotions.length; i++) {
			if (promotions[i] !== '' && promotions[i] !== 'del') {
				newPromotions = [...newPromotions, promotions[i]]
			}
		}

		await addPromotion({
			variables: {
				addPromotionInput: {
					productId: parseInt(
						addProductData.data?.addProduct.product?.id as string,
					),
					contents: newPromotions,
				},
			},
		})

		if (addProductData.data?.addProduct.product) {
			toast.success(
				`${product ? 'Chỉnh sửa' : 'Thêm'} sản phẩm thành công thành công 😍😍`,
				{
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				},
			)

			const apolloClient = initializeApollo()
			apolloClient.resetStore()

			router.push('/quan-tri/san-pham')
		}
	}

	useEffect(() => {
		setSlugProduct(slugify(nameProduct))
	}, [nameProduct])

	if (authLoading || (!authLoading && !authData?.me)) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	return (
		<Box className={styles.wrapper}>
			<Box className={styles.title}>
				{product ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm'}
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

						{/* quantity */}
						<Box mt={4}>
							<Box mb={2} className={styles.name}>
								Số lượng
								<span className={styles.name_required}>*</span>
							</Box>
							<NumberInput
								min={0}
								defaultValue={product ? product.quantity : 0}
								maxW='100px'
								isRequired>
								<Field
									as={NumberInputField}
									name='quantity'
									placeholder='Số lượng'
									type='text'
								/>
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</Box>
						{/* quantity */}

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
									{brandByIdsData?.brandByIds.map((item) => (
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
								{[...findImagesById('-1')].map((img, index) => (
									<UploadImage
										key={index}
										index={index}
										id={'-1'}
										name={
											product
												? product.name
												: findFilesById('-1').length > 0
												? index < findFilesById('-1').length
													? findFilesById('-1')[index].name
													: ''
												: ''
										}
										value={img}
										handleUploadImage={handleUploadImage}
										className={
											findImagesById('-1')[index] === 'del' ? styles.hidden : ''
										}
									/>
								))}
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
											onChange={handleChecked}
											defaultIsChecked={colorIds.includes(parseInt(item.id))}>
											{item.name}
										</Checkbox>
									))}
								</Grid>
							</Box>
							{/* color */}
						</Grid>

						{/* image color */}
						<Box mt={4} className={colors.length === 0 ? styles.hidden : ''}>
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
												{[...findImagesById(item.id), ''].map((img, index) => (
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
														value={img}
														handleUploadImage={handleUploadImage}
														className={
															findImagesById(item.id)[index] === 'del'
																? styles.hidden
																: ''
														}
													/>
												))}
											</Grid>
										</TabPanel>
									))}
								</TabPanels>
							</Tabs>
						</Box>
						{/* image color */}

						{/* specifications */}
						<Box mt={4}>
							<Box mb={2} className={styles.name}>
								Thông số Kỹ thuật
								<span className={styles.name_required}>*</span>
							</Box>

							{specis.map((item, index) => (
								<Grid
									key={index}
									templateColumns='1fr 2fr 0.5fr'
									gap='20px'
									mb={4}
									className={specis[index].name === 'del' ? styles.hidden : ''}>
									<Input
										name='name'
										value={item.name}
										placeholder='Tên'
										onChange={(e: any) => handleChangeSpeci(e, index)}
										required
									/>
									<Textarea
										name='content'
										value={item.content}
										minHeight='40px'
										placeholder='Nội dung'
										onChange={(e: any) => handleChangeSpeci(e, index)}
										required
									/>
									<Grid templateColumns='repeat(2, 1fr)' gap='10px'>
										<Tooltip hasArrow label='Thêm thông số'>
											<IconButton
												colorScheme='blue'
												aria-label='add specifications'
												icon={
													<i
														className={`bx bx-add-to-queue ${styles.btn_icon}`}></i>
												}
												onClick={() => handleClickSpeci(index, 'add')}
											/>
										</Tooltip>

										{specis.length > 1 && index !== 0 && (
											<Tooltip hasArrow label='Xóa thông số'>
												<IconButton
													colorScheme='red'
													aria-label='delete specifications'
													icon={
														<i
															className={`bx bx-trash-alt ${styles.btn_icon}`}></i>
													}
													onClick={() => handleClickSpeci(index, 'del')}
												/>
											</Tooltip>
										)}
									</Grid>
								</Grid>
							))}
						</Box>
						{/* specifications */}

						{/* description */}
						<Box mt={4}>
							<Box mb={2} className={styles.name}>
								Thông tin sản phẩm
							</Box>
							<Editor
								apiKey='1gm4ec14ey357xtl0d0kgqq7wrgep8xwarpr5pmjbihmkvx7'
								initialValue={product ? product.description : ''}
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

						{/* notification */}
						<Stack spacing={[1, 5]} direction={['column', 'row']} mt={4}>
							<Field
								as={Checkbox}
								name='installment'
								defaultChecked={product?.installment}>
								Trả góp
							</Field>
							<Field
								as={Checkbox}
								name='best_sell'
								defaultChecked={product?.best_sell}>
								Bán chạy
							</Field>
							<Field
								as={Checkbox}
								name='highlight'
								defaultChecked={product?.highlight}>
								Nổi bật
							</Field>
							<Field as={Checkbox} name='new' defaultChecked={product?.new}>
								Mới nhất
							</Field>
						</Stack>
						{/* notification */}

						{/* promotion */}
						<Box mt={4}>
							<Box mb={2} className={styles.name}>
								Thông tin khuyến mãi
							</Box>

							{promotions.map((item, index) => (
								<Grid
									key={index}
									templateColumns='1fr 0.5fr'
									gap='20px'
									mb={4}
									className={promotions[index] === 'del' ? styles.hidden : ''}>
									<Textarea
										name='content'
										value={item}
										minHeight='40px'
										placeholder='Nội dung'
										onChange={(e: any) => handleChangePromotion(e, index)}
									/>
									<Grid templateColumns='repeat(2, 1fr)' gap='10px' w='50%'>
										<Tooltip hasArrow label='Thêm thông tin'>
											<IconButton
												colorScheme='blue'
												aria-label='add promotion'
												icon={
													<i
														className={`bx bx-add-to-queue ${styles.btn_icon}`}></i>
												}
												onClick={() => handleClickPromotion(index, 'add')}
											/>
										</Tooltip>

										{promotions.length > 1 && index !== 0 && (
											<Tooltip hasArrow label='Xóa thông tin'>
												<IconButton
													colorScheme='red'
													aria-label='delete promotion'
													icon={
														<i
															className={`bx bx-trash-alt ${styles.btn_icon}`}></i>
													}
													onClick={() => handleClickPromotion(index, 'del')}
												/>
											</Tooltip>
										)}
									</Grid>
								</Grid>
							))}
						</Box>
						{/* promotion */}

						<Flex justifyContent='flex-end' alignItems='center'>
							<Button
								colorScheme='blue'
								mr={3}
								type='submit'
								isLoading={isSubmitting}>
								{product ? 'Chỉnh sửa' : 'Thêm'}
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
