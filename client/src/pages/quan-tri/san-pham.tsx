import { Box, Button, Flex, Input, Link, Spinner } from '@chakra-ui/react'
import AdminLayout from '../../components/Admin/AdminLayout'
import styles from '../../styles/Admin/product/Product.module.scss'
import NextLink from 'next/link'
import { useCheckAuth } from '../../utils/useCheckAuth'

const Product = () => {
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

					<i className={`bx bx-search-alt ${styles.search_add_input_icon}`}></i>
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
		</AdminLayout>
	)
}

export default Product
