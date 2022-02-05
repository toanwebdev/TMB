import { Flex, Spinner } from '@chakra-ui/react'
import AdminLayout from '../components/Admin/AdminLayout'
import DashboardMain from '../components/Admin/DashboardMain'
import DashboardRight from '../components/Admin/DashboardRight'
import { useCheckAuth } from '../utils/useCheckAuth'

const Admin = () => {
	const { data, loading } = useCheckAuth()

	if (loading || (!loading && !data?.me)) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	return (
		<AdminLayout>
			<DashboardMain />
			<DashboardRight />
		</AdminLayout>
	)
}

export default Admin
