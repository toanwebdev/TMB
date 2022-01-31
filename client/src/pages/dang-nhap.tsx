import { Box, Button, Flex, Link, Spinner } from '@chakra-ui/react'
import { Form, Formik, FormikHelpers } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import InputField from '../components/InputField'
import {
	LoginInput,
	MeDocument,
	MeQuery,
	useLoginMutation,
} from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import { initializeApollo } from '../lib/apolloClient'
import styles from '../styles/auth/Login.module.scss'
import { useCheckAuth } from '../utils/useCheckAuth'

const Login = () => {
	const router = useRouter()
	const [showPassword, setShowPassword] = useState(false)
	const initialValues: LoginInput = { username: '', password: '' }

	const [loginUser] = useLoginMutation()
	const { data: authData, loading: authLoading } = useCheckAuth()

	const onLoginSubmit = async (
		values: LoginInput,
		{ setErrors }: FormikHelpers<LoginInput>,
	) => {
		const response = await loginUser({
			variables: {
				loginInput: values,
			},
			update(cache, { data }) {
				if (data?.login.success) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: data.login.user },
					})
				}
			},
		})

		if (response.data?.login.errors) {
			setErrors(mapFieldErrors(response.data.login.errors))
		} else if (response.data?.login.user) {
			// login successfully
			toast.success(`Xin chào ${response.data.login.user.first_name} `, {
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
			<Box className={styles.title}>Đăng nhập vào tài khoản của bạn</Box>
			<Box className={styles.title_sub}>
				để tận hưởng tất cả các tính năng thú vị của chúng tôi ✌️
			</Box>
			<Box className={styles.form}>
				<Formik initialValues={initialValues} onSubmit={onLoginSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<Box>
								<InputField
									name='username'
									placeholder='Tên đăng nhập'
									label='Tên đăng nhập'
									type='text'
								/>
							</Box>
							<Box mt={4} className={styles.form_input_password_wrapper}>
								<InputField
									name='password'
									placeholder='Mật khẩu'
									label='Mật khẩu'
									type={showPassword ? 'text' : 'password'}
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

							<Flex mt={1}>
								<NextLink href='/quen-mat-khau'>
									<Link ml='auto' className={styles.form_forgotPassword}>
										Quên mật khẩu ?
									</Link>
								</NextLink>
							</Flex>

							<Button
								type='submit'
								mt={4}
								isLoading={isSubmitting}
								className={styles.form_loginBtn}>
								Đăng nhập
							</Button>

							<Box className={styles.form_register}>
								<span>Bạn chưa có tài khoản ?</span>
								<NextLink href='/dang-ky' passHref>
									<Link className={styles.form_register_link}>Đăng ký</Link>
								</NextLink>
							</Box>
						</Form>
					)}
				</Formik>
			</Box>
		</Flex>
	)
}

export default Login
