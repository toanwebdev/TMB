import {
	Box,
	Button,
	Flex,
	Grid,
	Link,
	Radio,
	RadioGroup,
	Spinner,
	Stack,
} from '@chakra-ui/react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import InputField from '../components/InputField'
import {
	MeDocument,
	MeQuery,
	RegisterInput,
	useRegisterMutation,
} from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import { initializeApollo } from '../lib/apolloClient'
import styles from '../styles/auth/Register.module.scss'
import { useCheckAuth } from '../utils/useCheckAuth'

const Register = () => {
	const router = useRouter()

	const [showPassword, setShowPassword] = useState(false)
	const { data: authData, loading: authLoading } = useCheckAuth()

	const initialValues: RegisterInput = {
		last_name: '',
		first_name: '',
		username: '',
		email: '',
		password: '',
		gender: 'Nam',
	}

	const [registerUser] = useRegisterMutation()

	const onRegisterSubmit = async (
		values: RegisterInput,
		{ setErrors }: FormikHelpers<RegisterInput>,
	) => {
		const response = await registerUser({
			variables: {
				registerInput: values,
			},
			update(cache, { data }) {
				if (data?.register.success) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: data.register.user },
					})
				}
			},
		})

		if (response.data?.register.errors) {
			setErrors(mapFieldErrors(response.data.register.errors))
		} else if (response.data?.register.user) {
			// register successfully
			toast.success(`Xin chào ${response.data.register.user.first_name} 😎😎`, {
				position: 'top-center',
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

			router.push('/')
		}
	}

	if (authLoading || (!authLoading && authData?.me)) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	return (
		<Flex
			direction='column'
			justifyContent='center'
			alignItems='center'
			className={styles.wrapper}>
			<Box className={styles.title}>Đăng ký</Box>
			<Box className={styles.title_sub}>
				để tận hưởng tất cả các tính năng thú vị của chúng tôi ✌️
			</Box>
			<Box className={styles.form}>
				<Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<Grid
								templateColumns='repeat(2, 1fr)'
								gap='10px'
								className={styles.form_input}>
								<Box>
									<InputField
										name='last_name'
										placeholder='Họ'
										label='Họ'
										type='text'
										isRequired
									/>
								</Box>

								<Box>
									<InputField
										name='first_name'
										placeholder='Tên'
										label='Tên'
										type='text'
										isRequired
									/>
								</Box>
							</Grid>

							<Box mt={4}>
								<Box className={styles.form_name}>
									Giới tính <span className={styles.form_name_required}>*</span>
								</Box>
								<RadioGroup defaultValue='Nam'>
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

							<Box mt={4}>
								<InputField
									name='username'
									placeholder='Tên đăng nhập'
									label='Tên đăng nhập'
									type='text'
									isRequired
								/>
							</Box>

							<Box mt={4}>
								<InputField
									name='email'
									placeholder='Email'
									label='Email'
									type='email'
									isRequired
								/>
							</Box>

							<Box mt={4} className={styles.form_input_password_wrapper}>
								<InputField
									name='password'
									placeholder='Mật khẩu'
									label='Mật khẩu'
									type={showPassword ? 'text' : 'password'}
									isRequired
								/>
								<Button
									variant={'ghost'}
									onClick={() => setShowPassword(!showPassword)}
									className={styles.form_input_password_icon}>
									{showPassword ? (
										<i className='bx bx-show-alt'></i>
									) : (
										<i className='bx bx-hide'></i>
									)}
								</Button>
							</Box>

							<Button
								type='submit'
								mt={4}
								isLoading={isSubmitting}
								className={styles.form_registerBtn}>
								Đăng ký
							</Button>

							<Box className={styles.form_login}>
								<span>Bạn đã có tài khoản ?</span>
								<NextLink href='/dang-nhap' passHref>
									<Link className={styles.form_login_link}>Đăng nhập</Link>
								</NextLink>
							</Box>
						</Form>
					)}
				</Formik>
			</Box>
		</Flex>
	)
}

export default Register
