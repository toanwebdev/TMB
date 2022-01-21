import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'

interface IStarRatingProps {
	ReadOnly?: boolean
	fontSize?: number
	rating?: number
}

const StarRating = ({ ReadOnly, fontSize, rating }: IStarRatingProps) => {
	const initRating = rating ? rating : 0
	const [ratingValue, setRatingValue] = useState(initRating)
	const [hover, setHover] = useState(0)

	return (
		<Flex
			justifyContent='space-between'
			alignItems='center'
			height={fontSize ? `${fontSize}px` : '20px'}
			width={fontSize ? `${fontSize * 5 + 5}px` : '105px'}
			m='5px 0'>
			{[...Array(5)].map((_, index: number) => (
				<Box
					key={index}
					cursor='pointer'
					transition='color .2s linear'
					color={index + 0.5 <= (hover || ratingValue) ? '#ffc107' : '#e4e5e9'}
					height={fontSize ? `${fontSize}px` : '20px'}
					width={fontSize ? `${fontSize}px` : '20px'}
					onClick={
						ReadOnly
							? () => setRatingValue(ratingValue)
							: () => setRatingValue(index + 1)
					}
					onMouseEnter={
						ReadOnly ? () => setHover(ratingValue) : () => setHover(index + 1)
					}
					onMouseLeave={
						ReadOnly ? () => setHover(ratingValue) : () => setHover(0)
					}>
					<i
						className={
							!ReadOnly
								? 'bx bxs-star'
								: ratingValue - index === 0.5
								? 'bx bxs-star-half'
								: index + 1 <= ratingValue
								? 'bx bxs-star'
								: 'bx bx-star'
						}
						style={{ fontSize: fontSize ? `${fontSize}px` : '20px' }}></i>
				</Box>
			))}
		</Flex>
	)
}

export default StarRating
