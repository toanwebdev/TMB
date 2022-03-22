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
	id?: number
	title?: string
	content?: string
	onHandleDel?: any
	isLoading?: boolean
}

const ModalDel = ({
	id,
	title,
	content,
	onHandleDel,
	isLoading,
}: IModalDelProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Tooltip hasArrow label='Xóa'>
				<IconButton
					size='sm'
					colorScheme='red'
					aria-label={title as string}
					icon={<i className='bx bx-trash-alt'></i>}
					onClick={onOpen}
				/>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>Bạn chắc chắn muốn xóa {content} ?</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							isLoading={isLoading}
							onClick={() => onHandleDel(id)}>
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
