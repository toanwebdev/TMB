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
import { useDelUserMutation } from '../../../generated/graphql'
import { IGetUser } from '../../../interface/user'
import { initializeApollo } from '../../../lib/apolloClient'
import styles from '../../../styles/Admin/product/ListProduct.module.scss'
import Pagination from '../../Pagination'
import ModalDel from '../ModalDel'
import ModalDetails from './ModalDetails'

interface IListUserProps {
	listUser: IGetUser[]
	pagination: any
	onPaginationChange: any
}

const ListUser = ({
	listUser,
	pagination,
	onPaginationChange,
}: IListUserProps) => {
	const router = useRouter()
	const [delUser, { loading }] = useDelUserMutation()
	const handleDel = async (id: number) => {
		const delUserData = await delUser({
			variables: {
				id,
			},
		})

		if (delUserData.data?.delUser && !loading) {
			toast.success('Xóa sản phẩm tài khoản thành công 😍😍', {
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

			router.push('/quan-tri/tai-khoan')
		}
	}

	return (
		<Box className={styles.wrapper}>
			<Table size='sm'>
				<Thead>
					<Tr>
						<Th>Họ</Th>
						<Th>Tên</Th>
						<Th>Tài khoản</Th>
						<Th>Email</Th>
						<Th>Giới tính</Th>
						<Th>Avatar</Th>
						<Th>Trạng thái</Th>
						<Th>Hành động</Th>
					</Tr>
				</Thead>
				<Tbody>
					{listUser.length <= 0 ? (
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
									<span>Không có tài khoản phù hợp</span>
								</Flex>
							</Td>
						</Tr>
					) : (
						listUser.map((item) => (
							<Tr key={item.id}>
								<Td maxW='250px'>{item.last_name}</Td>
								<Td>{item.first_name}</Td>
								<Td>{item.username}</Td>
								<Td>{item.email}</Td>
								<Td>{item.gender}</Td>
								<Td>
									<Image
										width='140px'
										height='140px'
										objectFit='contain'
										src={item.avatar}
										alt={item.username}
									/>
								</Td>
								<Td minW='120px'>
									<span
										className={`${styles.box} ${
											item.status === 1 ? styles.box_success : styles.box_danger
										}`}>
										{item.status === 1 ? 'Hoạt động' : 'Không hoạt động'}
									</span>
								</Td>
								<Td>
									<Flex>
										<ModalDetails user={item} />

										<NextLink
											href={`/quan-tri/tai-khoan/chinh-sua/${item.id}`}
											passHref>
											<Link>
												<Tooltip hasArrow label='Chỉnh sửa'>
													<IconButton
														m=' 0px 5px'
														size='sm'
														colorScheme='green'
														aria-label='Chỉnh sửa tài khoản'
														icon={<i className='bx bxs-edit-alt'></i>}
													/>
												</Tooltip>
											</Link>
										</NextLink>

										<ModalDel
											id={parseInt(item.id as string)}
											title={'Xóa tài khoản'}
											content={item.username}
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
							{listUser.length > 0 && (
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

export default ListUser
