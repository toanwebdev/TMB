import { Box, Flex } from '@chakra-ui/react'
import styles from '../styles/Loading.module.scss'

const Loading = () => {
	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			className={styles.wrapper}>
			<Box className={styles.content}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</Box>
		</Flex>
	)
}

export default Loading
