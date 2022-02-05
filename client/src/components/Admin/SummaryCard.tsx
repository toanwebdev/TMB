import { Box, Flex } from '@chakra-ui/react'
import { ISummary } from '../../interface/summary'
import styles from '../../styles/Admin/SummaryCard.module.scss'
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from 'react-circular-progressbar'

interface ISummaryCardProps {
	item: ISummary
}

const SummaryCard = ({ item }: ISummaryCardProps) => {
	return (
		<Flex className={styles.wrapper}>
			<Flex
				justifyContent='space-between'
				direction='column'
				className={styles.info}>
				<Box className={styles.info_title}>
					<Box>{item.title}</Box>
					<span>{item.subtitle}</span>
				</Box>
				<Box className={styles.info_value}>
					<Box>{item.value}</Box>
				</Box>
			</Flex>

			<Box className={styles.chart}>
				<CircularProgressbarWithChildren
					value={item.percent}
					strokeWidth={10}
					styles={buildStyles({
						pathColor: item.percent < 50 ? 'red' : '#8624DB',
						trailColor: 'transparent',
						strokeLinecap: 'round',
					})}>
					<Box className={styles.chart_value}>{item.percent}%</Box>
				</CircularProgressbarWithChildren>
			</Box>
		</Flex>
	)
}

export default SummaryCard
