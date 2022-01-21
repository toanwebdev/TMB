import {
	Box,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import styles from '../../../styles/product/Detail/DetailInfo.module.scss'
import parserHtml from 'html-react-parser'

interface IDetailInfoProps {
	description: string
}

const DetailInfo = ({ description }: IDetailInfoProps) => {
	const {
		isOpen: isOpenDescription,
		onOpen: onOpenDescription,
		onClose: onCloseDescription,
	} = useDisclosure()

	return (
		<Box className={styles.wrapper}>
			{/* description */}
			<Box className={styles.description_title}>Thông tin sản phẩm</Box>
			<Box className={styles.description_content}>
				{parserHtml(description)}
				<Box className={styles.description_content_bottom}></Box>
			</Box>
			<Flex justifyContent='center'>
				<Button
					variant='outline'
					className={styles.description_btn}
					onClick={onOpenDescription}>
					Xem thêm
				</Button>
			</Flex>

			<Modal isOpen={isOpenDescription} onClose={onCloseDescription} size='3xl'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Thông tin sản phẩm</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{parserHtml(description)}</ModalBody>
				</ModalContent>
			</Modal>
			{/* description */}
		</Box>
	)
}

export default DetailInfo
