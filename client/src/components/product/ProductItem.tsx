import { Box, Flex, Link } from '@chakra-ui/react'
import styles from '../../styles/product/ProductItem.module.scss'
import NextLink from 'next/link'
import StarRating from '../StarRating'
import { IProduct } from '../../interface/product'
import numberWithCommas from '../../utils/numberWithCommas'

interface IProductProps {
	product: IProduct
	borderRadius?: string
}

const ProductItem = ({ product, borderRadius }: IProductProps) => {
	return (
		<Box className={styles.wrapper} borderRadius={borderRadius}>
			<NextLink href='/' passHref>
				<Link>
					{!product.installment && !product.discount && (
						<Box className={styles.box} mt='15px' />
					)}

					{product.installment && (
						<Box className={`${styles.box} ${styles.installment}`}>
							Trả góp 0%
						</Box>
					)}

					{product.discount !== 0 && (
						<Box className={`${styles.box} ${styles.discount}`}>
							-{product.discount}%
						</Box>
					)}

					<Flex justifyContent='center' className={styles.img_wrapper}>
						<img src={product.img} alt={product.name} className={styles.img} />
					</Flex>

					<Box className={styles.name}>{product.name}</Box>

					{product.priceOld !== 0 && (
						<Box className={styles.priceOld}>
							{numberWithCommas(product.priceOld)}₫
						</Box>
					)}

					<Box>
						<span className={styles.price}>
							{numberWithCommas(product.price)}
						</span>
						₫
					</Box>

					{product.gift !== 0 && (
						<Box className={styles.gift}>
							Quà {numberWithCommas(product.gift)}₫
						</Box>
					)}

					{product.rating !== 0 && (
						<Flex alignItems='center'>
							<StarRating ReadOnly rating={product.rating} fontSize={17} />
							<Box>
								<span className={styles.ratingTotal}>
									{numberWithCommas(product.ratingTotal)}
								</span>{' '}
								đánh giá
							</Box>
						</Flex>
					)}
				</Link>
			</NextLink>
		</Box>
	)
}

export default ProductItem
