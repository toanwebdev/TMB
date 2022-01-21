import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'
import styles from '../styles/auth/Login.module.scss'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)

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
				<FormControl id='usernameOrEmail'>
					<FormLabel className={styles.form_label}>
						Tài khoản hoặc Email
					</FormLabel>
					<Input type='text' className={styles.form_input} />
				</FormControl>

				<FormControl id='password' mt='20px'>
					<FormLabel className={styles.form_label}>Mật khẩu</FormLabel>
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

				<NextLink href='/quen-mat-khau'>
					<Link className={styles.form_forgotPassword}>Quên mật khẩu ?</Link>
				</NextLink>

				<Button variant='solid' className={styles.form_loginBtn}>
					Đăng nhập
				</Button>

				<Box className={styles.form_register}>
					<span>Bạn chưa có tài khoản ?</span>
					<NextLink href='/dang-ky' passHref>
						<Link className={styles.form_register_link}>Đăng ký</Link>
					</NextLink>
				</Box>
			</Box>
		</Flex>
	)
}

export default Login
