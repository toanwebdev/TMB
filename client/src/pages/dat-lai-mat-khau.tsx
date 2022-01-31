import {
	Alert,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	Flex,
	Link,
	Spinner,
} from '@chakra-ui/react'
import { Form, Formik, FormikHelpers } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import InputField from '../components/InputField'
import {
	ChangePasswordInput,
	MeDocument,
	MeQuery,
	useChangePasswordMutation,
} from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import styles from '../styles/auth/ChangePassword.module.scss'
import { useCheckAuth } from '../utils/useCheckAuth'

const ChangePassword = () => {
	const [showPassword, setShowPassword] = useState(false)

	const router = useRouter()

	const { data: authData, loading: authLoading } = useCheckAuth()
	const initialValues = { newPassword: '' }

	const [changePassword] = useChangePasswordMutation()
	const [tokenError, setTokenError] = useState('')

	const onChangePasswordSubmit = async (
		values: ChangePasswordInput,
		{ setErrors }: FormikHelpers<ChangePasswordInput>,
	) => {
		if (router.query.userId && router.query.token) {
			const response = await changePassword({
				variables: {
					userId: parseInt(router.query.userId as string),
					token: router.query.token as string,
					changePasswordInput: values,
				},
				update(cache, { data }) {
					if (data?.changePassword.success) {
						cache.writeQuery<MeQuery>({
							query: MeDocument,
							data: { me: data.changePassword.user },
						})
					}
				},
			})

			if (response.data?.changePassword.errors) {
				const fieldErrors = mapFieldErrors(response.data.changePassword.errors)
				if ('token' in fieldErrors) {
					setTokenError(fieldErrors.token)
				}
				setErrors(fieldErrors)
			} else if (response.data?.changePassword.user) {
				toast.success(
					`Xin chào ${response.data.changePassword.user.first_name} `,
					{
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored',
					},
				)

				router.push('/')
			}
		}
	}

	if (authLoading || (!authLoading && authData?.me)) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	if (!router.query.token || !router.query.userId) {
		return (
			<Flex justifyContent='center'>
				<Box w='800px' mt='50px'>
					<Alert status='error'>
						<AlertIcon />
						<AlertTitle>Yêu cầu thay đổi mật khẩu không hợp lệ</AlertTitle>
					</Alert>
					<Flex mt={2}>
						<NextLink href='/dang-nhap'>
							<Link ml='auto'>Quay lại đăng nhập</Link>
						</NextLink>
					</Flex>
				</Box>
			</Flex>
		)
	}
	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			className={styles.wrapper}>
			<Box className={styles.form}>
				<Box className={styles.form_title}>Đặt lại mật khẩu</Box>

				<Formik initialValues={initialValues} onSubmit={onChangePasswordSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<Box mt={4} className={styles.form_input_password_wrapper}>
								<InputField
									name='newPassword'
									placeholder='Mật khẩu mới'
									label='Mật khẩu mới'
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
							{tokenError && (
								<Flex>
									<Box color='red' mr={2}>
										{tokenError}
									</Box>
									<NextLink href='/quen-mat-khau'>
										<Link>Quay lại quên mật khẩu</Link>
									</NextLink>
								</Flex>
							)}
							<Button
								type='submit'
								colorScheme='teal'
								mt={4}
								isLoading={isSubmitting}
								className={styles.form_resetPasswordBtn}>
								Đặt lại mật khẩu
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</Flex>
	)
}

export default ChangePassword
