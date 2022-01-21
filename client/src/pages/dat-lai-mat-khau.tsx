import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'
import { useState } from 'react'
import styles from '../styles/auth/ResetPassword.module.scss'

const ResetPassword = () => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			className={styles.wrapper}>
			<Box className={styles.form}>
				<Box className={styles.form_title}>Đặt lại mật khẩu</Box>

				<FormControl id='password' mt='20px'>
					<FormLabel className={styles.form_label}>Mật khẩu mới</FormLabel>
					<InputGroup>
						<Input
							type={`${showPassword ? 'text' : 'password'}`}
							className={styles.form_input}
						/>
						<InputRightElement>
							<Button
								variant={'ghost'}
								onClick={() => setShowPassword(!showPassword)}
								className={styles.form_input_icon}>
								{showPassword ? (
									<i className='bx bx-show-alt'></i>
								) : (
									<i className='bx bx-hide'></i>
								)}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>

				<Button variant='solid' className={styles.form_resetPasswordBtn}>
					Đặt lại
				</Button>
			</Box>
		</Flex>
	)
}

export default ResetPassword
