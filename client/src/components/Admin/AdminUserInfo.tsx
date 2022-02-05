import { Avatar, Flex, Spinner } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import styles from '../../styles/Admin/AdminUserInfo.module.scss'
import { useCheckAuth } from '../../utils/useCheckAuth'

const AdminUserInfo = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()

	return (
		<>
			<ToastContainer />
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
		</>
	)
}

export default AdminUserInfo
