import { Box, Flex } from '@chakra-ui/react'
import { IValue } from '../../interface/dashboard'
import styles from '../../styles/Admin/OverallList.module.scss'

interface IOverallListProps {
	item: IValue[]
}

const OverallList = ({ item }: IOverallListProps) => {
	const icons = ['bx bx-receipt', 'bx bx-user', 'bx bx-cube', 'bx bx-dollar']

	return (
		<Box>
			<Box className={styles.title}>Tổng thể</Box>
			<ul>
				{item.map((i, index) => (
					<li key={i.id} className={styles.list_item}>
						<Box className={styles.list_item_icon}>
							<i className={icons[index]}></i>
						</Box>
						<Flex justifyContent='space-between' direction='column'>
							<Box className={styles.title}>{i.value}</Box>
							<span>{i.title}</span>
						</Flex>
					</li>
				))}
			</ul>
		</Box>
	)
}

export default OverallList
