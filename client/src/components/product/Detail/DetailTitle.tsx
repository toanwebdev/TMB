import { Box, Flex } from '@chakra-ui/react'
import styles from '../../../styles/product/Detail/DetailTitle.module.scss'
import numberWithCommas from '../../../utils/numberWithCommas'
import StarRating from '../../StarRating'

interface IDetailTitleProps {
	detailTitle: string
}

const DetailTitle = ({ detailTitle }: IDetailTitleProps) => {
	return (
		<Flex alignItems='center' className={styles.wrapper}>
			<Box className={styles.title}>{detailTitle}</Box>
			<StarRating ReadOnly rating={4.5} fontSize={17} />
			<Box>
				<span className={styles.ratingTotal}>{numberWithCommas(108)}</span> đánh
				giá
			</Box>
		</Flex>
	)
}

export default DetailTitle
