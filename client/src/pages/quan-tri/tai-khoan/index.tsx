import { Box, Button, Flex, Input, Link, Spinner } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import AdminLayout from '../../../components/Admin/AdminLayout'
import NextLink from 'next/link'
import styles from '../../../styles/Admin/SearchAdd.module.scss'
import { useEffect, useRef, useState } from 'react'
import { useCheckAuth } from '../../../utils/useCheckAuth'
import {
	useUserPaginationQuery,
	useUserTotalRowsQuery,
} from '../../../generated/graphql'
import { IGetUser } from '../../../interface/user'
import ListUser from '../../../components/Admin/user/ListUser'

const User = () => {
	const { data: authData, loading: authLoading } = useCheckAuth()
	const [searchTerm, setSearchTerm] = useState('')
	const searchTimeOutRef: any = useRef('')
	const [users, setUsers] = useState<Array<IGetUser>>([])

	const [pagination, setPagination] = useState({
		page: 1,
		limit: 2,
		totalRows: 0,
		searchTerm: '',
	})

	const { data: userTotalRowsData, loading: userTotalRowsLoading } =
		useUserTotalRowsQuery({
			fetchPolicy: 'no-cache',
			variables: {
				searchTerm: pagination.searchTerm,
			},
		})

	useEffect(() => {
		if (userTotalRowsData) {
			setPagination({
				...pagination,
				totalRows: userTotalRowsData.userTotalRows,
			})
		}
	}, [userTotalRowsLoading])

	const { data: userPaginationData, loading: userPaginationLoading } =
		useUserPaginationQuery({
			fetchPolicy: 'no-cache',
			variables: {
				userPaginationInput: {
					skip: (pagination.page - 1) * pagination.limit,
					take: pagination.limit,
					searchTerm: pagination.searchTerm.toLowerCase(),
				},
			},
		})

	useEffect(() => {
		if (userPaginationData && userPaginationData.userPagination) {
			setUsers(userPaginationData?.userPagination as IGetUser[])
		}
	}, [userPaginationLoading])

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
							placeholder='Tìm kiếm tài khoản ...'
							size='md'
							value={searchTerm}
							onChange={handleSearchChange}
						/>

						<i
							className={`bx bx-search-alt ${styles.search_add_input_icon}`}></i>
					</Box>
					{/* search */}

					{/* add */}
					<NextLink href='/quan-tri/tai-khoan/them-moi'>
						<Link>
							<Button className={styles.search_add_btn}>
								<i
									className={`bx bx-add-to-queue ${styles.search_add_btn_icon}`}></i>
								Thêm tài khoản
							</Button>
						</Link>
					</NextLink>
					{/* add */}
				</Flex>

				{userPaginationLoading ? (
					<Flex justifyContent='center' alignItems='center' minHeight='70vh'>
						<Spinner />
					</Flex>
				) : (
					<ListUser
						listUser={users}
						pagination={pagination}
						onPaginationChange={handlePageChange}
					/>
				)}
			</AdminLayout>
		</>
	)
}

export default User
