import { Box, Flex, Grid, GridItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { IImage } from '../../interface/image'
import styles from '../../styles/product/ProductSlider.module.scss'

interface IProductSliderProps {
	sliderImgs: IImage[]
	bannerImgs: IImage[]
}

const ProductSlider = ({ sliderImgs, bannerImgs }: IProductSliderProps) => {
	const sliderRef: any = useRef()
	const [index, setIndex] = useState(0)

	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		ref: sliderRef,
		appendDots: (dots: any) => {
			return (
				<Flex justifyContent='center' bottom='5px'>
					{dots.map((dot: any, idx: number) => (
						<span
							key={dot.key}
							className={`${styles.banner_slider_dots_item} ${
								idx === index ? styles.banner_slider_dots_item_active : ''
							}`}
						/>
					))}
				</Flex>
			)
		},
		beforeChange: (_current: number, next: number) => {
			setIndex(next)
		},
	}

	return (
		<Grid
			templateColumns='800px 380px'
			gap='20px'
			className={styles.banner_wrapper}>
			{/* slider */}
			<GridItem className={styles.banner_slider}>
				<Box
					className={`${styles.banner_slider_icon} ${styles.banner_slider_icon_prev}`}
					onClick={() => sliderRef.current.slickPrev()}>
					<i className='bx bx-chevron-left'></i>
				</Box>
				<Slider {...settings}>
					{sliderImgs.map((img) => (
						<NextLink key={img.id} href='/' passHref>
							<Link>
								<img
									src={img.link}
									alt={img.name}
									className={styles.banner_slider_img}
								/>
							</Link>
						</NextLink>
					))}
				</Slider>
				<Box
					className={`${styles.banner_slider_icon} ${styles.banner_slider_icon_next}`}
					onClick={() => sliderRef.current.slickNext()}>
					<i className='bx bx-chevron-right'></i>
				</Box>
			</GridItem>
			{/* slider */}

			{/* banner img */}
			<Grid gridTemplateRows='repeat(2, 1fr)' gap='10px'>
				{bannerImgs.map((img) => (
					<NextLink key={img.id} href='/' passHref>
						<Link>
							<img
								src={img.link}
								alt={img.name}
								className={styles.banner_img}
							/>
						</Link>
					</NextLink>
				))}
			</Grid>
			{/* banner img */}
		</Grid>
	)
}

export default ProductSlider
