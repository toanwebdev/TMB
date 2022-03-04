import { Box, Button, Flex, Input, Link, Spinner } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import AdminLayout from '../../components/Admin/AdminLayout'
import ListProduct from '../../components/Admin/product/ListProduct'
import {
	useProductPaginationQuery,
	useTotalRowsQuery,
} from '../../generated/graphql'
import { IGetProduct } from '../../interface/product'
import styles from '../../styles/Admin/product/Product.module.scss'
import { useCheckAuth } from '../../utils/useCheckAuth'

const Product = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()
	const { data: totalRowsData, loading: totalRowsLoading } = useTotalRowsQuery()

	const [pagination, setPagination] = useState({
		page: 1,
		limit: 2,
		totalRows: 0,
	})

	useEffect(() => {
		if (totalRowsData) {
			setPagination({
				...pagination,
				totalRows: totalRowsData.totalRows,
			})
		}
	}, [totalRowsLoading])

	const { data: productPaginationData, loading: productPaginationLoading } =
		useProductPaginationQuery({
			variables: {
				productPaginationInput: {
					skip: (pagination.page - 1) * pagination.limit,
					take: pagination.limit,
				},
			},
		})

	const handlePageChange = (newPage: number) => {
		setPagination({ ...pagination, page: newPage })
	}

	if (
		authLoading ||
		(!authLoading && !authData?.me) ||
		productPaginationLoading
	) {
		return (
			<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
				<Spinner />
			</Flex>
		)
	}

	return (
		<>
			<ToastContainer />
			<AdminLayout>
				<Flex
					justifyContent='space-between'
					alignItems='center'
					className={styles.search_add}>
					{/* search */}
					<Box className={styles.search_add_input_wrapper}>
						<Input
							className={styles.search_add_input}
							variant='outline'
							placeholder='Tìm kiếm sản phẩm ...'
							size='md'
						/>

						<i
							className={`bx bx-search-alt ${styles.search_add_input_icon}`}></i>
					</Box>
					{/* search */}

					{/* add */}
					<NextLink href='/quan-tri/san-pham/them-moi'>
						<Link>
							<Button className={styles.search_add_btn}>
								<i
									className={`bx bx-add-to-queue ${styles.search_add_btn_icon}`}></i>
								Thêm sản phẩm
							</Button>
						</Link>
					</NextLink>
					{/* add */}
				</Flex>

				{/* product */}
				<ListProduct
					listProduct={
						productPaginationData
							? (productPaginationData.productPagination as IGetProduct[])
							: []
					}
					pagination={pagination}
					onPaginationChange={handlePageChange}
				/>
				{/* product */}
			</AdminLayout>
		</>
	)
}

export default Product
