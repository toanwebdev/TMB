import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { IProduct } from '../../interface/product'
import styles from '../../styles/product/ProductGroup.module.scss'
import ProductItem from './ProductItem'

interface IProductGroupProps {
	products: IProduct[]
	productTotal?: number
}

const ProductGroup = ({ products, productTotal }: IProductGroupProps) => {
	return (
		<>
			<Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(2, 1fr)'>
				{products.map((item) => (
					<Box key={item.id} className={styles.product_item}>
						<ProductItem product={item} />
					</Box>
				))}
			</Grid>

			<Flex justifyContent='center'>
				<Button variant='solid' className={styles.product_moreBtn}>
					<span>Xem thêm {productTotal} sản phẩm</span>
					<i className={`bx bxs-down-arrow ${styles.product_moreBtn_icon}`}></i>
				</Button>
			</Flex>
		</>
	)
}

export default ProductGroup
