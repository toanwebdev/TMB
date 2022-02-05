import { Box, Flex, Progress } from '@chakra-ui/react'
import { IValue } from '../../interface/dashboard'
import styles from '../../styles/Admin/RevenueByChannel.module.scss'

interface IRevenueByChannelProps {
	item: IValue[]
}

const RevenueByChannel = ({ item }: IRevenueByChannelProps) => {
	return (
		<Box>
			<Box className={styles.title}>Lợi nhuận từ kênh</Box>
			<ul>
				{item.map((i) => (
					<li key={i.id} className={styles.list_item}>
						<Flex
							justifyContent='space-between'
							alignItems='center'
							className={styles.list_item_title}>
							{i.title}
							<span
								className={
									i.value < 50
										? styles.list_item_danger
										: styles.list_item_success
								}>
								{i.value}%
							</span>
						</Flex>

						<Progress
							className={styles.list_item_progress}
							size='sm'
							value={i.value as number}
						/>
					</li>
				))}
			</ul>
		</Box>
	)
}

export default RevenueByChannel
