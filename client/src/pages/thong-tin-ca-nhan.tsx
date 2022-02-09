import {
	Avatar,
	AvatarBadge,
	Box,
	Button,
	Flex,
	Grid,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Spinner,
	Stack,
	useDisclosure
} from '@chakra-ui/react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import CartFormMenuItem from '../components/cart/CartFormMenuItem'
import InputField from '../components/InputField'
import Layout from '../components/Layout'
import {
	ChangeUserProfileInput,
	MeDocument,
	MeQuery,
	useChangeUserProfileMutation,
	useDistrictAllQuery,
	useProvinceAllQuery,
	useSingleUploadMutation,
	useVillageAllQuery
} from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import { initializeApollo } from '../lib/apolloClient'
import styles from '../styles/auth/UserProfile.module.scss'
import { useCheckAuth } from '../utils/useCheckAuth'

const UserProfile = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()
	const [avatar, setAvatar] = useState('')
	const [file, setFile] = useState('')

	const initProvinceId = authData?.me?.province
		? (authData.me.province.id as string)
		: '-1'

	const initDistrictId = authData?.me?.district
		? (authData.me.district.id as string)
		: '-1'

	const initVillageId = authData?.me?.village
		? (authData.me.village.id as string)
		: '-1'

	const [provinceId, setProvinceId] = useState(initProvinceId)
	const [districtId, setDistrictId] = useState(initDistrictId)
	const [villageId, setVillageId] = useState(initVillageId)

	const [singleUpload] = useSingleUploadMutation()
	const [changeUserProfile] = useChangeUserProfileMutation()

	const { data: provinceAllData } = useProvinceAllQuery()
	const { data: districtAllData } = useDistrictAllQuery({
		variables: {
			provinceId: parseInt(provinceId),
		},
	})
	const { data: villageAllData } = useVillageAllQuery({
		variables: {
			districtId: parseInt(districtId),
		},
	})

	const {
		isOpen: isOpenModal,
		onOpen: onOpenModal,
		onClose: onCloseModal,
	} = useDisclosure()

	const initialValues: ChangeUserProfileInput = {
		id: parseInt(authData?.me?.id as string),
		last_name: authData?.me?.last_name as string,
		first_name: authData?.me?.first_name as string,
		gender: authData?.me?.gender as string,
		email: authData?.me?.email as string,
		avatar: '',
		phone_num: authData?.me?.phone_num ? authData.me.phone_num : '',
		provinceId: authData?.me?.province ? parseInt(authData.me.province.id) : -1,
		districtId: authData?.me?.district ? parseInt(authData.me.district.id) : -1,
		villageId: authData?.me?.village ? parseInt(authData.me.village.id) : -1,
		street: authData?.me?.street ? authData.me.street : '',
	}

	const handleChangeAvatar = (e: any) => {
		if (e.target.files[0]) {
			const reader = new FileReader()
			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatar(reader.result as string)
				}
			}

			reader.readAsDataURL(e.target.files[0])
			setFile(e.target.files[0])
		}
	}

	const onEditUserProfileSubmit = async (
		values: ChangeUserProfileInput,
		{ setErrors }: FormikHelpers<ChangeUserProfileInput>,
	) => {
		let avatarUpload = authData?.me?.avatar as string
		if (avatar) {
			if (avatar !== 'null' && file) {
				await singleUpload({
					variables: {
						file,
					},
					update(_cache, { data }) {
						if (data?.singleUpload) {
							avatarUpload = data.singleUpload
						}
					},
				})
			} else {
				avatarUpload = ''
			}
		}

		const valuesUpdated: ChangeUserProfileInput = {
			...values,
			avatar: avatarUpload,
			provinceId: parseInt(provinceId),
			districtId: parseInt(districtId),
			villageId: parseInt(villageId),
		}

		const response = await changeUserProfile({
			variables: {
				changeUserProfileInput: valuesUpdated,
			},
			update(cache, { data }) {
				if (data?.changeUserProfile.success) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: data.changeUserProfile.user },
					})
				}
			},
		})

		if (response.data?.changeUserProfile.errors) {
			setErrors(mapFieldErrors(response.data.changeUserProfile.errors))
		} else if (response.data?.changeUserProfile.user) {
			// changeUserProfile successfully
			toast.success(`Cập nhật thông tin thành công 😍😍`, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})

			const apolloClient = initializeApollo()
			apolloClient.resetStore()

			setAvatar(avatarUpload)
			onCloseModal()
		}
	}

	if (authLoading || (!authLoading && !authData?.me)) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	return (
		<Layout>
			<Flex
				justifyContent='center'
				alignItems='center'
				className={styles.wrapper}>
				<Box className={styles.info}>
					<Box className={styles.info_title}>Thông tin cá nhân</Box>
					{/* avatar */}
					<Grid templateColumns='repeat(2, 1fr)' mt='15px'>
						<span className={styles.info_name}>Ảnh đại diện:</span>
						<Avatar
							name={authData?.me?.first_name}
							src={authData?.me?.avatar as string | undefined}
							size='lg'
						/>
					</Grid>

					{/* avatar */}

					{/* fullName */}
					<Grid templateColumns='repeat(2, 1fr)' mt='15px'>
						<span className={styles.info_name}>Họ và tên:</span>
						<span>
							{authData?.me?.last_name} {authData?.me?.first_name}
						</span>
					</Grid>
					{/* fullName */}

					{/* gender */}
					<Grid templateColumns='repeat(2, 1fr)' mt='5px'>
						<span className={styles.info_name}>Giới tính:</span>
						<span>{authData?.me?.gender}</span>
					</Grid>
					{/* gender */}

					{/* username */}
					<Grid templateColumns='repeat(2, 1fr)' mt='5px'>
						<span className={styles.info_name}>Tên đăng nhập:</span>
						<span className={styles.info_username}>
							{authData?.me?.username}
						</span>
					</Grid>
					{/* username */}

					{/* email */}
					<Grid templateColumns='repeat(2, 1fr)' mt='5px'>
						<span className={styles.info_name}>email:</span>
						<span>{authData?.me?.email}</span>
					</Grid>
					{/* email */}

					{/* phone */}
					<Grid templateColumns='repeat(2, 1fr)' mt='5px'>
						<span className={styles.info_name}>Số điện thoại:</span>
						<span>
							{authData?.me?.phone_num ? (
								authData?.me?.phone_num
							) : (
								<span className={styles.info_value_empty}>
									Chưa có số điện thoại
								</span>
							)}
						</span>
					</Grid>
					{/* phone */}

					{/* address */}
					<Grid templateColumns='repeat(2, 1fr)' mt='5px'>
						<span className={styles.info_name}>Địa chỉ giao hàng:</span>
						<span>
							{authData?.me?.province ? (
								`${authData.me.street}, ${authData.me.village?.name}, ${authData.me.district?.name}, ${authData.me.province?.name}`
							) : (
								<span className={styles.info_value_empty}>
									Chưa có địa chỉ giao hàng
								</span>
							)}
						</span>
					</Grid>
					{/* address */}

					<Flex justifyContent='flex-end' alignItems='center'>
						<Button className={styles.info_btn} onClick={onOpenModal}>
							<i className={`bx bxs-edit-alt ${styles.info_btn_icon}`}></i>
							<span>Chỉnh sửa thông tin</span>
						</Button>
					</Flex>

					{/* edit user profile */}
					<Modal isOpen={isOpenModal} onClose={onCloseModal}>
						<ModalOverlay />
						<ModalContent className={styles.info_modal}>
							<ModalHeader>Chỉnh sửa thông tin cá nhân</ModalHeader>
							<ModalCloseButton />
							<Formik
								initialValues={initialValues}
								onSubmit={onEditUserProfileSubmit}>
								{({ isSubmitting }) => (
									<Form>
										<ModalBody>
											{/* avatar */}
											<Box>
												<Box className={styles.info_modal_name}>
													Ảnh đại diện:
												</Box>
												<Grid templateColumns='1fr 1.5fr'>
													<Avatar
														name={authData?.me?.first_name}
														size='xl'
														src={
															avatar ? avatar : (authData?.me?.avatar as string)
														}>
														<AvatarBadge
															as={IconButton}
															size='sm'
															rounded='full'
															top='-10px'
															colorScheme='red'
															aria-label='remove Image'
															icon={<i className='bx bx-x'></i>}
															onClick={() => setAvatar('null')}
														/>
													</Avatar>
													<Box>
														<Button className={styles.info_modal_upload_custom}>
															<span
																className={
																	styles.info_modal_upload_custom_input
																}>
																<InputField
																	name='avatar'
																	type='file'
																	onChange={handleChangeAvatar}
																/>
															</span>
															<i
																className={`bx bx-image-add ${styles.info_modal_upload_custom_icon}`}></i>
															<span>Tải ảnh lên</span>
														</Button>

														{avatar && avatar !== authData?.me?.avatar && (
															<Button
																className={styles.info_modal_upload_restore}
																onClick={() =>
																	setAvatar(authData?.me?.avatar as string)
																}>
																<i
																	className={`bx bx-images ${styles.info_modal_upload_custom_icon}`}></i>
																<span>Khôi phục ảnh</span>
															</Button>
														)}
													</Box>
												</Grid>
											</Box>
											{/* avatar */}

											{/* fullName */}
											<Grid
												templateColumns='repeat(2, 1fr)'
												gap='10px'
												className={styles.form_input}>
												<Box mt={4}>
													<InputField
														name='last_name'
														placeholder='Họ'
														label='Họ'
														type='text'
														isRequired
													/>
												</Box>

												<Box mt={4}>
													<InputField
														name='first_name'
														placeholder='Tên'
														label='Tên'
														type='text'
														isRequired
													/>
												</Box>
											</Grid>
											{/* fullName */}

											{/* gender */}
											<Box mt={4}>
												<Box className={styles.info_modal_gender_name}>
													Giới tính{' '}
													<span
														className={styles.info_modal_gender_name_required}>
														*
													</span>
												</Box>
												<RadioGroup defaultValue={authData?.me?.gender}>
													<Stack direction='row'>
														<Field name='gender' value='Nam' as={Radio}>
															Nam
														</Field>
														<Field name='gender' value='Nữ' as={Radio}>
															Nữ
														</Field>
													</Stack>
												</RadioGroup>
											</Box>
											{/* gender */}

											{/* email */}
											<Box mt={4}>
												<InputField
													name='email'
													placeholder='Email'
													label='Email'
													type='email'
													isRequired
												/>
											</Box>
											{/* email */}

											{/* phone */}
											<Box mt={4}>
												<InputField
													name='phone_num'
													placeholder='Số điện thoại'
													label='Số điện thoại'
													type='text'
												/>
											</Box>
											{/* phone */}

											{/* address */}
											<Box mt={4}>
												<Box className={styles.info_modal_address_name}>
													Địa chỉ nhận hàng
												</Box>
												<Grid
													templateColumns='repeat(2, 1fr)'
													templateRows='repeat(2, 1fr)'
													gap='10px'>
													<CartFormMenuItem
														menus={provinceAllData?.provinceAll}
														initAddress={
															authData?.me?.province
																? authData.me.province
																: {
																		id: '-1',
																		name: 'Chọn tỉnh, thành phố',
																  }
														}
														placeholder='Nhập tỉnh, thành để tìm kiếm nhanh'
														changeAddress={(id: any) => setProvinceId(id)}
													/>
													<CartFormMenuItem
														menus={districtAllData?.districtAll}
														initAddress={
															authData?.me?.district &&
															authData?.me?.province?.id === provinceId
																? authData.me.district
																: { id: '-1', name: 'Chọn quận, huyện' }
														}
														placeholder='Nhập quận, huyện để tìm kiếm nhanh'
														changeAddress={(id: any) => setDistrictId(id)}
													/>
													<CartFormMenuItem
														menus={villageAllData?.villageAll}
														initAddress={
															authData?.me?.village &&
															authData?.me?.province?.id === provinceId &&
															authData?.me?.district?.id === districtId
																? authData.me.village
																: { id: '-1', name: 'Chọn phường, xã' }
														}
														placeholder='Nhập phường, xã để tìm kiếm nhanh'
														changeAddress={(id: any) => setVillageId(id)}
													/>
													<InputField
														name='street'
														placeholder='Số nhà, tên đường'
														type='text'
													/>
												</Grid>
											</Box>
											{/* address */}
										</ModalBody>
										<ModalFooter>
											<Button
												colorScheme='blue'
												mr={3}
												type='submit'
												isLoading={isSubmitting}>
												Lưu lại
											</Button>
											<Button colorScheme='red' onClick={onCloseModal}>
												Hủy
											</Button>
										</ModalFooter>
									</Form>
								)}
							</Formik>
						</ModalContent>
					</Modal>
					{/* edit user profile */}
				</Box>
			</Flex>
		</Layout>
	)
}

export default UserProfile
