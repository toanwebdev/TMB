import { Box, Flex, Grid, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { INews } from '../../interface/news'
import styles from '../../styles/home/News.module.scss'

interface INewsProps {
	news: INews[]
}

const News = ({ news }: INewsProps) => {
	return (
		<Box className={styles.wrapper}>
			{/* title */}
			<Flex
				justifyContent='space-between'
				alignItems='center'
				className={styles.title_wrapper}>
				<span className={styles.title}>24h công nghệ</span>
				<Flex alignItems='center'>
					<NextLink href='/' passHref>
						<Link className={styles.title_item}>Xem thêm</Link>
					</NextLink>
				</Flex>
			</Flex>
			{/* title */}

			{/* news */}
			<Grid
				templateColumns='720px 450px'
				templateRows='repeat(5, 1fr)'
				templateAreas={`'h1 h2' 'h1 h3' 'h1 h4' 'h1 h5' 'h1 h6'`}
				gap='10px'
				className={styles.content}>
				{news.map((item) => (
					<NextLink href='/' passHref key={item.id}>
						<Link className={styles.content_item}>
							<img
								src={item.link}
								alt={item.title}
								className={styles.content_item_img}
							/>
							<Box pl='10px'>
								<span className={styles.content_item_title}>{item.title}</span>
								<span className={styles.content_item_timeOld}>
									{item.timeOld}
								</span>
							</Box>
						</Link>
					</NextLink>
				))}
			</Grid>
			{/* news */}
		</Box>
	)
}

export default News
