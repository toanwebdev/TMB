import { Flex, Spinner } from '@chakra-ui/react'
import AdminLayout from '../../../components/Admin/AdminLayout'
import AddOrEditProduct from '../../../components/Admin/product/AddOrEditProduct'
import { useCheckAuth } from '../../../utils/useCheckAuth'

const AddProduct = () => {
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
			<AddOrEditProduct />
		</AdminLayout>
	)
}

export default AddProduct
