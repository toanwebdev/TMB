import { Box, Button, Flex, Link, Spinner } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import InputField from '../components/InputField'
import {
	ForgotPasswordInput,
	useForgotPasswordMutation,
} from '../generated/graphql'
import styles from '../styles/auth/ForgotPassword.module.scss'
import { useCheckAuth } from '../utils/useCheckAuth'

const ForgotPassword = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()

	const initialValues = { email: '' }

	const [forgotPassword, { loading, data }] = useForgotPasswordMutation()

	const onForgotPasswordSubmit = async (values: ForgotPasswordInput) => {
		await forgotPassword({ variables: { forgotPasswordInput: values } })
	}

	if (authLoading || (!authLoading && authData?.me)) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	if (!loading && data) {
		return (
			<Flex
				justifyContent='center'
				alignItems='center'
				mt='-20vh'
				className={styles.wrapper}>
				<Box className={styles.form}>
					<Box className={styles.form_title}>
						Đã gửi yêu cầu đặt lại mật khẩu
					</Box>
					<Box className={styles.form_title_sub}>
						Bạn vui lòng kiểm tra hộp thư email để thực hiện đặt lại mật khẩu
					</Box>
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
				<Formik initialValues={initialValues} onSubmit={onForgotPasswordSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<Box className={styles.form_title}>Quên mật khẩu ?</Box>
							<Box className={styles.form_title_sub}>
								Bạn sẽ nhận được một email có liên kết đặt lại mật khẩu
							</Box>
							<Box mt={4}>
								<InputField
									name='email'
									placeholder='your-email@example.com'
									label=''
									type='email'
								/>
							</Box>

							<Flex mt={2}>
								<NextLink href='/dang-nhap'>
									<Link ml='auto'>Quay lại đăng nhập</Link>
								</NextLink>
							</Flex>

							<Button
								type='submit'
								colorScheme='teal'
								mt={4}
								isLoading={isSubmitting}
								className={styles.form_forgotPasswordBtn}>
								Yêu cầu đặt lại
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</Flex>
	)
}

export default ForgotPassword
