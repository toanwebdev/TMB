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

interface IModalDelProps {
	name?: string
}

const ModalDel = ({ name }: IModalDelProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Tooltip hasArrow label='Xóa'>
				<IconButton
					size='sm'
					colorScheme='red'
					aria-label='Xóa sản phẩm'
					icon={<i className='bx bx-trash-alt'></i>}
					onClick={onOpen}
				/>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Xóa sản phẩm</ModalHeader>
					<ModalCloseButton />
					<ModalBody>Bạn chắc chắn muốn xóa {name} ?</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3}>
							Đồng ý
						</Button>
						<Button colorScheme='red' onClick={onClose}>
							Hủy
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ModalDel
