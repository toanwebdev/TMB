import { Box, Flex } from '@chakra-ui/react'
import { ISummarySpecial } from '../../interface/summary'
import styles from '../../styles/Admin/SummaryCardSpecial.module.scss'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
)

interface ISummaryCardSpecialProps {
	item: ISummarySpecial
}

const SummaryCardSpecial = ({ item }: ISummaryCardSpecialProps) => {
	const chartOptions = {
		responsive: true,
		scales: {
			xAxis: {
				display: false,
			},
			yAxis: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			point: {
				radius: 0,
			},
		},
	}

	const chartData = {
		labels: item.chartData.labels,
		datasets: [
			{
				label: 'Revenue',
				data: item.chartData.data,
				borderColor: '#fff',
				tension: 0.5,
			},
		],
	}

	return (
		<Flex
			direction='column'
			alignItems='center'
			justifyContent='space-between'
			className={styles.wrapper}>
			<Box className={styles.title}>{item.title}</Box>
			<Box className={styles.value}>{item.value}</Box>
			<Box className={styles.chart}>
				<Line options={chartOptions} data={chartData} width={`250px`} />
			</Box>
		</Flex>
	)
}

export default SummaryCardSpecial
