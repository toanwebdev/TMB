import {
	Box,
	Button,
	Flex,
	Grid,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import { IConfig } from '../../../interface/config'
import styles from '../../../styles/product/Detail/DetailPayment.module.scss'
import numberWithCommas from '../../../utils/numberWithCommas'

interface IOption {
	rams: string[]
	colors: string[]
}

interface IDetailPaymentProps {
	option: IOption
	configurations: IConfig
	promotions: string[]
}

const DetailPayment = ({
	option,
	configurations,
	promotions,
}: IDetailPaymentProps) => {
	const {
		isOpen: isOpenConfiguration,
		onOpen: onOpenConfiguration,
		onClose: onCloseConfiguration,
	} = useDisclosure()

	return (
		<Box className={styles.wrapper}>
			{/* button */}
			<Flex wrap='wrap'>
				{option.rams.map((item, index: number) => (
					<Button key={index} variant='outline' className={styles.btn}>
						{item}
					</Button>
				))}
			</Flex>

			<Flex wrap='wrap'>
				{option.colors.map((item, index: number) => (
					<Button key={index} variant='outline' className={styles.btn}>
						{item}
					</Button>
				))}
			</Flex>
			{/* button */}

			{/* price */}
			<Flex alignItems='center'>
				<Box className={styles.price}>{numberWithCommas(4690000)}₫</Box>
				<Box className={styles.installment}>Trả góp 0%</Box>
			</Flex>
			{/* price */}

			{/* promotion */}
			<Box className={styles.promotion}>
				<span className={styles.promotion_title}>Khuyến mãi</span>
				<Box className={styles.promotion_item_wrapper}>
					{promotions.map((item, index: number) => (
						<Flex
							alignItems='center'
							key={index}
							className={styles.promotion_item}>
							<i
								className={`bx bx-badge-check ${styles.promotion_item_icon}`}></i>
							<span>{item}</span>
						</Flex>
					))}
				</Box>
			</Box>
			{/* promotion */}

			<Box className={styles.status}>Còn hàng</Box>

			{/* payment */}
			<Button variant='solid' className={`${styles.btn} ${styles.btn_now}`}>
				Mua ngay
			</Button>

			<Grid templateColumns='repeat(2, 1fr)' gap='10px'>
				<Button
					variant='solid'
					className={`${styles.btn} ${styles.btn_installment}`}>
					<Flex direction='column' alignItems='center'>
						<span>MUA TRẢ GÓP 0%</span>
						<span className={styles.btn_installment_sub}>
							Duyệt hồ sơ trong 5 phút
						</span>
					</Flex>
				</Button>
				<Button
					variant='solid'
					className={`${styles.btn} ${styles.btn_installment}`}>
					<Flex direction='column' alignItems='center'>
						<span>TRẢ GÓP QUA THẺ</span>
						<span className={styles.btn_installment_sub}>
							Visa, Mastercard, JCB, Amex
						</span>
					</Flex>
				</Button>
			</Grid>
			{/* payment */}

			{/* configuration */}
			<Box className={styles.configuration}>
				<Box className={styles.configuration_title}>{configurations.title}</Box>
				{configurations.contents.map((item, index: number) => (
					<Flex
						alignItems='center'
						key={item.id}
						className={`${styles.configuration_item} ${
							index > 8 ? styles.configuration_item_hide : ''
						}`}
						bgColor={index % 2 === 0 ? '#f5f5f5' : ''}>
						<span className={styles.configuration_item_name}>{item.name}:</span>
						<span className={styles.configuration_item_content}>
							{item.content}
						</span>
					</Flex>
				))}
				<Flex justifyContent='center'>
					<Button
						variant='outline'
						className={styles.configuration_btn}
						onClick={onOpenConfiguration}>
						Xem cấu hình chi tiết
					</Button>
				</Flex>

				<Modal
					isOpen={isOpenConfiguration}
					onClose={onCloseConfiguration}
					size='2xl'>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Thông số kỹ thuật</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							{configurations.contents.map((item, index: number) => (
								<Flex
									alignItems='center'
									key={item.id}
									className={styles.configuration_item}
									bgColor={index % 2 === 0 ? '#f5f5f5' : ''}>
									<span className={styles.configuration_item_name}>
										{item.name}:
									</span>
									<span className={styles.configuration_item_content}>
										{item.content}
									</span>
								</Flex>
							))}
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
			{/* configuration */}
		</Box>
	)
}

export default DetailPayment
