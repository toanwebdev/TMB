import { Box } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'
import { IChartData } from '../../interface/summary'
import styles from '../../styles/Admin/RevenueByMonthsChart.module.scss'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
)

interface IRevenueByMonthsChartProps {
	item: IChartData
}

const RevenueByMonthsChart = ({ item }: IRevenueByMonthsChartProps) => {
	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			yAxes: {
				grid: {
					display: false,
					drawBorder: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
		elements: {
			bar: {
				backgroundColor: '#f15a25',
				borderRadius: 20,
				borderSkipped: 'bottom',
			},
		},
	}

	const chartData = {
		labels: item.labels,
		datasets: [
			{
				label: 'Lợi nhuận',
				data: item.data,
			},
		],
	}

	return (
		<Box className={styles.wrapper}>
			<Box className={styles.title}>Lợi nhuận trong tháng</Box>
			<Box>
				<Bar options={chartOptions as any} data={chartData} height={`300px`} />
			</Box>
		</Box>
	)
}

export default RevenueByMonthsChart
