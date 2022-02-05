import { Box } from '@chakra-ui/react'
import { IValue } from '../../interface/dashboard'
import styles from '../../styles/Admin/DashboardRight.module.scss'
import OverallList from './OverallList'
import RevenueByChannel from './RevenueByChannel'

const DashboardRight = () => {
	const overall: IValue[] = [
		{
			id: 1,
			value: '300K',
			title: 'Orders',
		},
		{
			id: 2,
			value: '9.876K',
			title: 'Customers',
		},
		{
			id: 3,
			value: '1.234K',
			title: 'Products',
		},
		{
			id: 4,
			value: '$5678',
			title: 'Revenue',
		},
	]
	const revenueByChannel: IValue[] = [
		{
			id: 1,
			title: 'Trực tiếp',
			value: 70,
		},
		{
			id: 2,
			title: 'Tìm kiếm bên ngoài',
			value: 40,
		},
		{
			id: 3,
			title: 'Giới thiệu',
			value: 60,
		},
		{
			id: 4,
			title: 'Mạng xã hội',
			value: 30,
		},
	]

	return (
		<Box className={styles.wrapper}>
			<OverallList item={overall} />
			<RevenueByChannel item={revenueByChannel} />
		</Box>
	)
}

export default DashboardRight
