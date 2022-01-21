import { Box, Button, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRef } from 'react'
import Slider from 'react-slick'
import { IProduct } from '../../interface/product'
import styles from '../../styles/home/ProductSale.module.scss'
import ProductItem from '../product/ProductItem'

interface IProductSaleProps {
	products: IProduct[]
}

const ProductSale = ({ products }: IProductSaleProps) => {
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
			{/* slider */}
			<Box className={styles.slider}>
				<Box
					className={`${styles.slider_icon} ${styles.slider_icon_prev}`}
					onClick={() => sliderRef.current.slickPrev()}>
					<i className='bx bx-chevron-left'></i>
				</Box>
				<Slider {...settings}>
					{products.map((item) => (
						<Box key={item.id} className={styles.slider_item}>
							<ProductItem product={item} borderRadius='5px' />
						</Box>
					))}
				</Slider>
				<Box
					className={`${styles.slider_icon} ${styles.slider_icon_next}`}
					onClick={() => sliderRef.current.slickNext()}>
					<i className='bx bx-chevron-right'></i>
				</Box>
			</Box>
			{/* slider */}

			{/* more */}
			<Flex justifyContent='center'>
				<NextLink href='/' passHref>
					<Link>
						<Button variant='solid' className={styles.moreBtn}>
							Xem tất cả
						</Button>
					</Link>
				</NextLink>
			</Flex>
			{/* more */}
		</Box>
	)
}

export default ProductSale
