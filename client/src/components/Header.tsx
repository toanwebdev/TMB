import {
	Avatar,
	Box,
	Button,
	Flex,
	Input,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Tooltip,
	useDisclosure,
} from '@chakra-ui/react'
import { Form, Formik, FormikHelpers } from 'formik'
import NextLink from 'next/link'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {
	EditPasswordInput,
	MeDocument,
	MeQuery,
	useEditPasswordMutation,
	useLogoutMutation,
} from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import styles from '../styles/Header.module.scss'
import { useCheckAuth } from '../utils/useCheckAuth'
import InputField from './InputField'

const Header = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()
	const [logoutUser] = useLogoutMutation()
	const [editPassword] = useEditPasswordMutation()

	const {
		isOpen: isOpenModal,
		onOpen: onOpenModal,
		onClose: onCloseModal,
	} = useDisclosure()
	const [showPassword, setShowPassword] = useState(false)

	const initialValues: EditPasswordInput = {
		id: parseInt(authData?.me?.id as string),
		password: '',
		new_password: '',
	}

	const onEditPasswordSubmit = async (
		values: EditPasswordInput,
		{ setErrors }: FormikHelpers<EditPasswordInput>,
	) => {
		const response = await editPassword({
			variables: {
				editPasswordInput: values,
			},
		})

		if (response.data?.editPassword.errors) {
			setErrors(mapFieldErrors(response.data.editPassword.errors))
		} else if (response.data?.editPassword.user) {
			// changeUserProfile successfully
			toast.success(`Thay đổi mật khẩu thành công 😍😍`, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})

			onCloseModal()
		}
	}

	const logout = async () => {
		await logoutUser({
			update(cache, { data }) {
				if (data?.logout) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: null },
					})
				}
			},
		})
	}

	let body

	if (authLoading) {
		body = null
	} else if (!authData?.me) {
		body = (
			<Box className={styles.auth}>
				{/* login */}
				<NextLink href='/dang-nhap' passHref>
					<Link className={styles.auth_link}>Đăng nhập</Link>
				</NextLink>
				{/* login */}
				<span className={styles.auth_slash}>/</span>
				{/* register */}
				<NextLink href='/dang-ky' passHref>
					<Link className={styles.auth_link}>Đăng ký</Link>
				</NextLink>
				{/* register */}
			</Box>
		)
	} else {
		body = (
			<Box className={styles.auth}>
				<Menu>
					<MenuButton className={styles.auth_menu_btn}>
						<Avatar
							name={authData.me.username}
							src={authData.me.avatar as string | undefined}
							className={styles.auth_avatar}
						/>
						<span>
							{authData.me.last_name} {authData.me.first_name}
						</span>
					</MenuButton>
					<MenuList className={styles.auth_menu_list}>
						<NextLink href='/thong-tin-ca-nhan' passHref>
							<Link className={styles.auth_menu_icon_wrapper}>
								<MenuItem>
									<i className={`bx bx-user-pin ${styles.auth_menu_icon}`}></i>
									<span>Thông tin cá nhân</span>
								</MenuItem>
							</Link>
						</NextLink>

						<MenuItem onClick={onOpenModal}>
							<i className={`bx bx-edit-alt ${styles.auth_menu_icon}`}></i>
							<span>Thay đổi mật khẩu</span>
						</MenuItem>

						<Modal isOpen={isOpenModal} onClose={onCloseModal}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Thay đổi mật khẩu</ModalHeader>
								<ModalCloseButton />
								<Formik
									initialValues={initialValues}
									onSubmit={onEditPasswordSubmit}>
									{({ isSubmitting }) => (
										<Form>
											<ModalBody>
												{/* password old */}
												<Box className={styles.modal_input_password_wrapper}>
													<InputField
														name='password'
														placeholder='Mật khẩu cũ'
														label='Mật khẩu cũ'
														type={showPassword ? 'text' : 'password'}
														isRequired
													/>
													<Button
														variant={'ghost'}
														onClick={() => setShowPassword(!showPassword)}
														className={styles.modal_input_password_icon}>
														{showPassword ? (
															<i className='bx bx-show-alt'></i>
														) : (
															<i className='bx bx-hide'></i>
														)}
													</Button>
												</Box>
												{/* password old */}

												{/* password new */}
												<Box
													mt={4}
													className={styles.modal_input_password_wrapper}>
													<InputField
														name='new_password'
														placeholder='Mật khẩu mới'
														label='Mật khẩu mới'
														type={showPassword ? 'text' : 'password'}
														isRequired
													/>
													<Button
														variant={'ghost'}
														onClick={() => setShowPassword(!showPassword)}
														className={styles.modal_input_password_icon}>
														{showPassword ? (
															<i className='bx bx-show-alt'></i>
														) : (
															<i className='bx bx-hide'></i>
														)}
													</Button>
												</Box>
												{/* password new */}
											</ModalBody>

											<ModalFooter>
												<Button
													type='submit'
													colorScheme='blue'
													mr={3}
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

						<MenuItem
							onClick={logout}
							className={styles.auth_menu_icon_wrapper}>
							<i
								className={`bx bx-log-out-circle ${styles.auth_menu_icon}`}></i>
							<span>Đăng xuất</span>
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		)
	}

	return (
		<>
			<ToastContainer />
			<Flex
				justifyContent='space-around'
				alignItems='center'
				className={styles.wrapper}>
				{/* logo */}
				<NextLink href='/' passHref>
					<Link className={styles.logo}>TMB</Link>
				</NextLink>
				{/* logo */}

				{/* search */}
				<Box className={styles.search_wrapper}>
					<Box className={styles.search_icon}>
						<i className='bx bx-search-alt'></i>
					</Box>
					<Tooltip hasArrow bg='blue.400' label='Nhấn enter để tìm kiếm'>
						<Input
							className={styles.search_input}
							placeholder='Tìm kiếm sản phẩm ...'
							size='md'
						/>
					</Tooltip>
				</Box>
				{/* search */}

				<Box>
					{/* cart */}
					<NextLink href='/gio-hang' passHref>
						<Link>
							<Button
								className={styles.cart_btn}
								leftIcon={<i className={`bx bx-cart ${styles.cart_icon}`}></i>}
								variant='outline'
								fontSize={14}>
								Giỏ hàng
							</Button>
						</Link>
					</NextLink>
					{/* cart */}

					{/* history */}
					<NextLink href='/lich-su-don-hang' passHref>
						<Link className={`${styles.link} ${styles.history}`}>
							Lịch sử đơn hàng
						</Link>
					</NextLink>
					{/* history */}
				</Box>

				{/* auth */}
				{body}
				{/* auth */}
			</Flex>
		</>
	)
}

export default Header
