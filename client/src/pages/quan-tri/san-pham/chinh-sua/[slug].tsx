import { Flex, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AdminLayout from '../../../../components/Admin/AdminLayout'
import AddOrEditProduct from '../../../../components/Admin/product/AddOrEditProduct'
import { useProductBySlugQuery } from '../../../../generated/graphql'
import { IGetProduct } from '../../../../interface/product'
import { useCheckAuth } from '../../../../utils/useCheckAuth'

const EditProduct = () => {
	const router = useRouter()
	const { data, loading } = useCheckAuth()
	const [product, setProduct] = useState<IGetProduct>()

	const { data: productData, loading: productLoading } = useProductBySlugQuery({
		fetchPolicy: 'no-cache',
		variables: {
			productSlug: router.query.slug as string,
		},
	})

	useEffect(() => {
		if (productData && productData.productBySlug) {
			setProduct(productData.productBySlug as IGetProduct)
		}
	}, [productLoading])

	if (loading || (!loading && !data?.me) || !product) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	return (
		<AdminLayout>
			<AddOrEditProduct product={product} />
		</AdminLayout>
	)
}

export default EditProduct
