import {
	Box,
	Flex,
	IconButton,
	Image,
	Link,
	Spinner,
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
import { IGetProduct } from '../../../interface/product'
import styles from '../../../styles/Admin/product/ListProduct.module.scss'
import numberWithCommas from '../../../utils/numberWithCommas'
import Pagination from '../../Pagination'
import ModalDel from '../ModalDel'
import ModalDetails from '../ModalDetails'

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
									minHeight={`${157 * pagination.limit}px`}>
									<Spinner />
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

										<ModalDel name={item.name} />
									</Flex>
								</Td>
							</Tr>
						))
					)}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th colSpan={8}>
							<Flex justifyContent='flex-end'>
								<Pagination
									pagination={pagination}
									onPaginationChange={onPaginationChange}
								/>
							</Flex>
						</Th>
					</Tr>
				</Tfoot>
			</Table>
		</Box>
	)
}

export default ListProduct
