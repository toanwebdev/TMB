import { Box, Flex, Grid, GridItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { IImage } from '../../interface/image'
import styles from '../../styles/home/SliderHome.module.scss'

interface ISliderHomeProps {
	sliderImgs: IImage[]
	bannerImgs: IImage[]
}

const SliderHome = ({ sliderImgs, bannerImgs }: ISliderHomeProps) => {
	const sliderRef: any = useRef()
	const [index, setIndex] = useState(0)
	const [widthPaging, setWithPaging] = useState(0)

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
				<Box
					position='unset'
					height='50px'
					mt='-5px'
					transform={`translateX(-${widthPaging}px)`}
					transition='transform .3s linear'>
					<Flex className={styles.banner_slider_dots}>
						{dots.map((dot: any, idx: number) => (
							<span
								key={dot.key}
								className={
									idx === index ? styles.banner_slider_dots_active : ''
								}>
								{dot.props.children}
							</span>
						))}
					</Flex>
				</Box>
			)
		},
		customPaging: (index: number) => (
			<Box className={styles.banner_slider_alt}>{sliderImgs[index].name}</Box>
		),
		beforeChange: (_current: number, next: number) => {
			let value = 3

			if (sliderImgs.length - next < 3) {
				value = sliderImgs.length - next
			}
			if (next >= index) {
				if (next <= 4) {
					setWithPaging(0)
				} else if (next === 5 || (next - 5) % value === 0) {
					setWithPaging(widthPaging + value * 166)
				}
				if (next === sliderImgs.length - 1) {
					setWithPaging((sliderImgs.length - 5) * 166)
				}
			} else {
				if (next === 0) {
					setWithPaging(0)
				}
				if (
					next === sliderImgs.length - 6 ||
					(next < sliderImgs.length - 6 && (next - 5) % value === 0)
				) {
					setWithPaging(widthPaging - value * 166)
				}
			}
			setIndex(next)
		},
	}
	return (
		<Grid
			templateColumns='830px 350px'
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
			<Grid
				templateColumns='repeat(2, 1fr)'
				gridTemplateRows='repeat(2, 1fr)'
				gap='10px'>
				{bannerImgs.map((img) => (
					<NextLink key={img.id} href='/' passHref>
						<Link>
							<img src={img.link} alt='' className={styles.banner_img} />
						</Link>
					</NextLink>
				))}
			</Grid>
			{/* banner img */}
		</Grid>
	)
}

export default SliderHome
