import { Flex, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../../components/Admin/AdminLayout'
import AddOrEditProduct from '../../../../components/Admin/product/AddOrEditProduct'
import { useProductBySlugQuery } from '../../../../generated/graphql'
import { IGetProduct } from '../../../../interface/product'
import { useCheckAuth } from '../../../../utils/useCheckAuth'

const EditProduct = () => {
	const router = useRouter()
	const { data, loading } = useCheckAuth()

	const { data: productData, loading: productLoading } = useProductBySlugQuery({
		variables: {
			productSlug: router.query.slug as string,
		},
	})

	if (loading || (!loading && !data?.me) || productLoading) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	return (
		<AdminLayout>
			<AddOrEditProduct product={productData?.productBySlug as IGetProduct} />
		</AdminLayout>
	)
}

export default EditProduct
