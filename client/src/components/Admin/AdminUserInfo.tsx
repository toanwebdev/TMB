import { Avatar, Flex } from '@chakra-ui/react'
import styles from '../../styles/Admin/AdminUserInfo.module.scss'
import { useCheckAuth } from '../../utils/useCheckAuth'

const AdminUserInfo = () => {
	const { data: authData } = useCheckAuth()

	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			className={styles.wrapper}>
			<Avatar
				name={authData?.me?.first_name}
				src={authData?.me?.avatar as string}
			/>
			<span className={styles.name}>{authData?.me?.first_name}</span>
		</Flex>
	)
}

export default AdminUserInfo
