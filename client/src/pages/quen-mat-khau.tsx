import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import styles from '../styles/auth/ForgotPassword.module.scss'

const ForgotPassword = () => {
	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			className={styles.wrapper}>
			<Box className={styles.form}>
				<Box className={styles.form_title}>Quên mật khẩu ?</Box>
				<Box className={styles.form_title_sub}>
					Bạn sẽ nhận được một email có liên kết đặt lại mật khẩu
				</Box>

				<FormControl id='email'>
					<Input
						type='email'
						placeholder='your-email@example.com'
						className={styles.form_input}
					/>
				</FormControl>

				<Button variant='solid' className={styles.form_forgotPasswordBtn}>
					Yêu cầu đặt lại
				</Button>
			</Box>
		</Flex>
	)
}

export default ForgotPassword
