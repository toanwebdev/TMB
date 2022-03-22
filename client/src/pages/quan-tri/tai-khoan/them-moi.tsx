import { Flex, Spinner } from '@chakra-ui/react'
import AdminLayout from '../../../components/Admin/AdminLayout'
import AddOrEditUser from '../../../components/Admin/user/AddOrEditUser'
import { useCheckAuth } from '../../../utils/useCheckAuth'

const AddUser = () => {
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
			<AddOrEditUser />
		</AdminLayout>
	)
}

export default AddUser
