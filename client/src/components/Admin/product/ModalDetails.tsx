import {
	Button,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Tooltip,
	useDisclosure,
} from '@chakra-ui/react'
import { IGetProduct } from '../../../interface/product'

interface IModalDetailsProps {
	product?: IGetProduct
}

const ModalDetails = ({ product }: IModalDetailsProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Tooltip hasArrow label='Xem chi tiết'>
				<IconButton
					size='sm'
					colorScheme='blue'
					aria-label='Xem chi tiết sản phẩm'
					icon={<i className='bx bx-detail'></i>}
					onClick={onOpen}
				/>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Xem chi tiết sản phẩm</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{product?.name}</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' onClick={onClose}>
							Đóng
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ModalDetails
