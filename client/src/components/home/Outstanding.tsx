import { Box, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRef } from 'react'
import Slider from 'react-slick'
import { IProduct, IProductName } from '../../interface/product'
import styles from '../../styles/home/Outstanding.module.scss'
import ProductGroup from '../product/ProductGroup'
import ProductItem from '../product/ProductItem'

interface IOutstandingProps {
	outstandingTitle: string
	productNames: IProductName[]
	productTotal: number
	products: IProduct[]
}

const Outstanding = ({
	outstandingTitle,
	productNames,
	productTotal,
	products,
}: IOutstandingProps) => {
	const sliderRef: any = useRef()

	const settings = {
		infinite: true,
		arrows: false,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 5,
		ref: sliderRef,
	}

	return (
		<Box className={styles.wrapper}>
			{/* title */}
			<Flex
				justifyContent='space-between'
				alignItems='center'
				className={styles.title_wrapper}>
				<span className={styles.title}>{outstandingTitle} nổi bật nhất</span>
				<Flex alignItems='center'>
					{productNames.map((item) => (
						<NextLink href='/' passHref key={item.id}>
							<Link className={styles.title_item}>{item.name}</Link>
						</NextLink>
					))}
					<NextLink href='/' passHref>
						<Link className={styles.title_item}>
							Xem tất cả{' '}
							<span className={styles.title_total}>{productTotal}</span>{' '}
							{outstandingTitle}
						</Link>
					</NextLink>
				</Flex>
			</Flex>
			{/* title */}

			{/* product */}
			{outstandingTitle === 'Điện thoại' ? (
				<ProductGroup products={products} />
			) : (
				<Box className={styles.product_slider}>
					<Box
						className={`${styles.product_slider_icon} ${styles.product_slider_icon_prev}`}
						onClick={() => sliderRef.current.slickPrev()}>
						<i className='bx bx-chevron-left'></i>
					</Box>
					<Slider {...settings}>
						{products.map((item) => (
							<Box key={item.id} className={styles.product_slider_item}>
								<ProductItem product={item} borderRadius='5px' />
							</Box>
						))}
					</Slider>
					<Box
						className={`${styles.product_slider_icon} ${styles.product_slider_icon_next}`}
						onClick={() => sliderRef.current.slickNext()}>
						<i className='bx bx-chevron-right'></i>
					</Box>
				</Box>
			)}
			{/* product */}
		</Box>
	)
}

export default Outstanding
