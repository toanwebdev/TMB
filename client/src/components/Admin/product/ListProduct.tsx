import {
	Box,
	Flex,
	IconButton,
	Image,
	Link,
	Table,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tooltip,
	Tr,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useDelProductMutation } from '../../../generated/graphql'
import { IGetProduct } from '../../../interface/product'
import { initializeApollo } from '../../../lib/apolloClient'
import styles from '../../../styles/Admin/product/ListProduct.module.scss'
import numberWithCommas from '../../../utils/numberWithCommas'
import Pagination from '../../Pagination'
import ModalDel from '../ModalDel'
import ModalDetails from './ModalDetails'

interface IListProductProps {
	listProduct: IGetProduct[]
	pagination: any
	onPaginationChange: any
}

const ListProduct = ({
	listProduct,
	pagination,
	onPaginationChange,
}: IListProductProps) => {
	const router = useRouter()
	const [delProduct, { loading }] = useDelProductMutation()
	const handleDel = async (id: number) => {
		const delProductData = await delProduct({
			variables: {
				id,
			},
		})

		if (delProductData.data?.delProduct && !loading) {
			toast.success('Xóa sản phẩm thành công thành công 😍😍', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})

			const apolloClient = initializeApollo()
			apolloClient.resetStore()

			router.push('/quan-tri/san-pham')
		}
	}

	return (
		<Box className={styles.wrapper}>
			<Table size='sm'>
				<Thead>
					<Tr>
						<Th>Tên sản phẩm</Th>
						<Th>Ảnh đại diện</Th>
						<Th>Loại sản phẩm</Th>
						<Th isNumeric>Giá nhập (VNĐ)</Th>
						<Th isNumeric>Giá bán (VNĐ)</Th>
						<Th isNumeric>Giảm giá (VNĐ)</Th>
						<Th>Trạng thái</Th>
						<Th>Hành động</Th>
					</Tr>
				</Thead>
				<Tbody>
					{listProduct.length <= 0 ? (
						<Tr>
							<Td colSpan={8}>
								<Flex
									justifyContent='center'
									alignItems='center'
									direction='column'
									minHeight={`${157 * pagination.limit}px`}
									fontSize='16px'
									fontWeight={600}
									color='#555'>
									<i
										className='bx bx-package'
										style={{ fontSize: '50px', marginBottom: '10px' }}></i>
									<span>Không có sản phẩm phù hợp</span>
								</Flex>
							</Td>
						</Tr>
					) : (
						listProduct.map((item) => (
							<Tr key={item.id}>
								<Td maxW='250px'>{item.name}</Td>
								<Td>
									<Image
										width='140px'
										height='140px'
										objectFit='contain'
										src={item.avatar}
										alt={item.name}
									/>
								</Td>
								<Td>{item.category.name}</Td>
								<Td isNumeric>{numberWithCommas(item.price_input)}</Td>
								<Td isNumeric>{numberWithCommas(item.price)}</Td>
								<Td isNumeric>{numberWithCommas(item.discount as number)}</Td>
								<Td minW='120px'>
									<span
										className={`${styles.box} ${
											item.quantity > 0 ? styles.box_success : styles.box_danger
										}`}>
										{item.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}
									</span>
								</Td>
								<Td>
									<Flex>
										<ModalDetails product={item} />

										<NextLink
											href={`/quan-tri/san-pham/chinh-sua/${item.slug}`}
											passHref>
											<Link>
												<Tooltip hasArrow label='Chỉnh sửa'>
													<IconButton
														m=' 0px 5px'
														size='sm'
														colorScheme='green'
														aria-label='Chỉnh sửa sản phẩm'
														icon={<i className='bx bxs-edit-alt'></i>}
													/>
												</Tooltip>
											</Link>
										</NextLink>

										<ModalDel
											id={parseInt(item.id as string)}
											title={'Xóa sản phẩm'}
											content={item.name}
											onHandleDel={handleDel}
											isLoading={loading}
										/>
									</Flex>
								</Td>
							</Tr>
						))
					)}
				</Tbody>

				<Tfoot>
					<Tr>
						<Th colSpan={8}>
							{listProduct.length > 0 && (
								<Flex justifyContent='flex-end'>
									<Pagination
										pagination={pagination}
										onPaginationChange={onPaginationChange}
									/>
								</Flex>
							)}
						</Th>
					</Tr>
				</Tfoot>
			</Table>
		</Box>
	)
}

export default ListProduct
