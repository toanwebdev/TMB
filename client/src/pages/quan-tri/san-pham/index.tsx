import { Box, Button, Flex, Input, Link, Spinner } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import AdminLayout from '../../../components/Admin/AdminLayout'
import ListProduct from '../../../components/Admin/product/ListProduct'
import {
	useProductPaginationQuery,
	useProductTotalRowsQuery,
} from '../../../generated/graphql'
import { IGetProduct } from '../../../interface/product'
import styles from '../../../styles/Admin/SearchAdd.module.scss'
import { useCheckAuth } from '../../../utils/useCheckAuth'

const Product = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()

	const [pagination, setPagination] = useState({
		page: 1,
		limit: 2,
		totalRows: 0,
		searchTerm: '',
	})

	const { data: productTotalRowsData, loading: productTotalRowsLoading } =
		useProductTotalRowsQuery({
			fetchPolicy: 'no-cache',
			variables: {
				searchTerm: pagination.searchTerm,
			},
		})

	const [searchTerm, setSearchTerm] = useState('')
	const searchTimeOutRef: any = useRef('')
	const [products, setProducts] = useState<Array<IGetProduct>>([])

	useEffect(() => {
		if (productTotalRowsData) {
			setPagination({
				...pagination,
				totalRows: productTotalRowsData.productTotalRows,
			})
		}
	}, [productTotalRowsLoading])

	const { data: productPaginationData, loading: productPaginationLoading } =
		useProductPaginationQuery({
			fetchPolicy: 'no-cache',
			variables: {
				productPaginationInput: {
					skip: (pagination.page - 1) * pagination.limit,
					take: pagination.limit,
					searchTerm: pagination.searchTerm,
				},
			},
		})

	useEffect(() => {
		if (productPaginationData && productPaginationData.productPagination) {
			setProducts(productPaginationData?.productPagination as IGetProduct[])
		}
	}, [productPaginationLoading])

	const handlePageChange = (newPage: number) => {
		setPagination({ ...pagination, page: newPage })
	}

	const handleSearchChange = (e: any) => {
		setSearchTerm(e.target.value)

		if (searchTimeOutRef.current) {
			clearTimeout(searchTimeOutRef.current)
		}

		searchTimeOutRef.current = setTimeout(() => {
			setPagination({
				...pagination,
				searchTerm: e.target.value ? e.target.value : '',
			})
		}, 300)
	}

	if (authLoading || (!authLoading && !authData?.me)) {
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
							value={searchTerm}
							onChange={handleSearchChange}
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
				{productPaginationLoading ? (
					<Flex justifyContent='center' alignItems='center' minHeight='70vh'>
						<Spinner />
					</Flex>
				) : (
					<ListProduct
						listProduct={products}
						pagination={pagination}
						onPaginationChange={handlePageChange}
					/>
				)}
			</AdminLayout>
		</>
	)
}

export default Product
