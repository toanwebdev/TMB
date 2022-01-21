import { Box, Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { IImageProduct } from '../../../interface/image'
import styles from '../../../styles/product/Detail/DetailSlider.module.scss'

interface IDetailSliderProps {
	sliderImgs: IImageProduct[]
}

const DetailSlider = ({ sliderImgs }: IDetailSliderProps) => {
	const sliderRef: any = useRef()
	const [index, setIndex] = useState(0)
	const [btn, setBtn] = useState(0)

	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		ref: sliderRef,
		appendDots: (dots: any) => {
			return (
				<Flex justifyContent='center' bottom='5px'>
					{dots.map((dot: any, idx: number) => (
						<span
							key={dot.key}
							className={`${styles.detail_slider_dots_item} ${
								idx === index ? styles.detail_slider_dots_item_active : ''
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
		<Box className={styles.wrapper}>
			{/* slider */}
			<Box className={styles.detail_slider}>
				<Box
					className={`${styles.detail_slider_icon} ${styles.detail_slider_icon_prev}`}
					onClick={() => sliderRef.current.slickPrev()}>
					<i className='bx bx-chevron-left'></i>
				</Box>
				<Slider {...settings}>
					{sliderImgs[btn].imgs.map((img) => (
						<img
							key={img.id}
							src={img.link}
							alt={img.name}
							className={styles.detail_slider_img}
						/>
					))}
				</Slider>
				<Box
					className={`${styles.detail_slider_icon} ${styles.detail_slider_icon_next}`}
					onClick={() => sliderRef.current.slickNext()}>
					<i className='bx bx-chevron-right'></i>
				</Box>
			</Box>
			{/* slider */}

			{/* button */}
			<Flex
				justifyContent='center'
				alignItems='center'
				className={styles.detail_btn}>
				{sliderImgs.map((item, idx: number) => (
					<Box
						key={item.id}
						className={`${styles.detail_btn_item} ${
							btn === idx ? styles.detail_btn_item_active : ''
						}`}
						onClick={() => setBtn(idx)}>
						<Flex
							justifyContent='center'
							alignItems='center'
							className={styles.detail_btn_item_img_wrapper}>
							<img src={item.avatar} alt={item.color} />
						</Flex>
						<span className={styles.detail_btn_item_color}>{item.color}</span>
					</Box>
				))}
			</Flex>
			{/* button */}
		</Box>
	)
}

export default DetailSlider
