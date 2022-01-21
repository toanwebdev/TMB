import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Input,
	InputGroup,
	InputRightElement,
	Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styles from '../styles/auth/Register.module.scss'
import { useState } from 'react'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)

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
				<Grid templateColumns='repeat(2, 1fr)' gap='10px'>
					<FormControl id='lastName' isRequired>
						<FormLabel className={styles.form_label}>Họ</FormLabel>
						<Input type='text' className={styles.form_input_name} />
					</FormControl>

					<FormControl id='firstName' isRequired>
						<FormLabel className={styles.form_label}>Tên</FormLabel>
						<Input type='text' className={styles.form_input_name} />
					</FormControl>
				</Grid>

				<FormControl id='email' mt='20px' isRequired>
					<FormLabel className={styles.form_label}>Email</FormLabel>
					<Input type='email' className={styles.form_input} />
				</FormControl>

				<FormControl id='password' mt='20px' isRequired>
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

				<Button variant='solid' className={styles.form_registerBtn}>
					Đăng ký
				</Button>

				<Box className={styles.form_login}>
					<span>Bạn đã có tài khoản ?</span>
					<NextLink href='/dang-nhap' passHref>
						<Link className={styles.form_login_link}>Đăng nhập</Link>
					</NextLink>
				</Box>
			</Box>
		</Flex>
	)
}

export default Login
