import { Box, Grid } from '@chakra-ui/react'
import { IChartData, ISummary, ISummarySpecial } from '../../interface/summary'
import styles from '../../styles/Admin/DashboardMain.module.scss'
import RevenueByMonthsChart from './RevenueByMonthsChart'
import SummaryCard from './SummaryCard'
import SummaryCardSpecial from './SummaryCardSpecial'

const DashboardMain = () => {
	const summary: ISummary[] = [
		{
			id: 1,
			title: 'Thu nhập',
			subtitle: 'Tổng thu nhập trong ngày',
			value: '$1.000',
			percent: 70,
		},
		{
			id: 2,
			title: 'Đơn hàng',
			subtitle: 'Tổng đơn hàng trong ngày',
			value: '3000',
			percent: 49,
		},
		{
			id: 3,
			title: 'Lợi nhuận',
			subtitle: 'Tổng lợi nhuận',
			value: '$678',
			percent: 38,
		},
		{
			id: 4,
			title: 'Lượt truy cập',
			subtitle: 'Tổng lượt truy cập',
			value: '2345',
			percent: 55,
		},
	]

	const revenueSummary: ISummarySpecial = {
		title: 'Lợi nhuận',
		value: '$678',
		chartData: {
			labels: [
				'Tháng 1',
				'Tháng 2',
				'Tháng 3',
				'Tháng 4',
				'Tháng 5',
				'Tháng 6',
				'Tháng 7',
				'Tháng 8',
				'Tháng 9',
				'Tháng 10',
				'Tháng 11',
				'Tháng 12',
			],
			data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
		},
	}

	const revenueByMonths: IChartData = {
		labels: [
			'Tháng 1',
			'Tháng 2',
			'Tháng 3',
			'Tháng 4',
			'Tháng 5',
			'Tháng 6',
			'Tháng 7',
			'Tháng 8',
			'Tháng 9',
			'Tháng 10',
			'Tháng 11',
			'Tháng 12',
		],
		data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
	}

	return (
		<Box className={styles.wrapper}>
			<Grid templateColumns='72% 25%' gap='25px'>
				<Grid
					templateColumns='repeat(2, 1fr)'
					templateRows='repeat(2, 1fr)'
					gap='20px'>
					{summary.map((item) => (
						<SummaryCard key={item.id} item={item} />
					))}
				</Grid>
				<SummaryCardSpecial item={revenueSummary} />
			</Grid>
			<RevenueByMonthsChart item={revenueByMonths} />
		</Box>
	)
}

export default DashboardMain
