import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import styles from '../../styles/Admin/AdminLayout.module.scss'
import AdminUserInfo from './AdminUserInfo'
import Sidebar from './Sidebar'

interface IAdminLayoutProps {
	children: ReactNode
}

const AdminLayout = ({ children }: IAdminLayoutProps) => {
	return (
		<Flex>
			<Sidebar />
			<Box className={styles.content}>
				<AdminUserInfo />
				<>{children}</>
			</Box>
		</Flex>
	)
}

export default AdminLayout
