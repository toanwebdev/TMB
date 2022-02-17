import { Box, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import styles from '../styles/Pagination.module.scss'

interface IPaginationProps {
	pagination: any
	onPaginationChange: any
}

const Pagination = ({ pagination, onPaginationChange }: IPaginationProps) => {
	const { page, limit, totalRows } = pagination
	const totalPages = Math.ceil(totalRows / limit)
	const [array, setArray] = useState<string[]>([])

	useEffect(() => {
		setArray(
			totalPages > 10
				? [
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'...',
						(totalPages - 2).toString(),
						(totalPages - 1).toString(),
						totalPages.toString(),
				  ]
				: [...Array(totalPages)].map((_, index) => (index + 1).toString()),
		)
	}, [totalPages])

	const handlePageChange = (newPage: number) => {
		onPaginationChange(newPage)
	}

	if (totalPages > 10) {
		useEffect(() => {
			if (page <= 6) {
				setArray([
					'1',
					'2',
					'3',
					'4',
					'5',
					'6',
					'...',
					(totalPages - 2).toString(),
					(totalPages - 1).toString(),
					totalPages.toString(),
				])
			} else if (page > 6 && page < totalPages - 5) {
				setArray([
					'1',
					'2',
					'3',
					'...',
					(page - 1).toString(),
					page.toString(),
					(page + 1).toString(),
					'...',
					(totalPages - 1).toString(),
					totalPages.toString(),
				])
			} else {
				setArray([
					'1',
					'2',
					'3',
					'...',
					(totalPages - 5).toString(),
					(totalPages - 4).toString(),
					(totalPages - 3).toString(),
					(totalPages - 2).toString(),
					(totalPages - 1).toString(),
					totalPages.toString(),
				])
			}
		}, [pagination])
	}

	return (
		<Box className={styles.wrapper}>
			<Button
				isDisabled={page <= 1}
				size='sm'
				variant='text'
				className={styles.btn}
				onClick={() => handlePageChange(page <= 1 ? page : page - 1)}>
				<i className='bx bx-chevron-left'></i>
				Prev
			</Button>

			{array.map((item, index) => (
				<Button
					key={index}
					size='sm'
					variant='outline'
					className={`${styles.btn} ${
						page === parseInt(item) ? styles.active : ''
					}`}
					onClick={() => handlePageChange(parseInt(item))}>
					{item}
				</Button>
			))}

			<Button
				isDisabled={page >= totalPages}
				size='sm'
				variant='text'
				className={styles.btn}
				onClick={() => handlePageChange(page >= totalPages ? page : page + 1)}>
				Next
				<i className='bx bx-chevron-right'></i>
			</Button>
		</Box>
	)
}

export default Pagination
