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
import { IGetUser } from '../../../interface/user'

interface IModalDetailsProps {
	user?: IGetUser
}

const ModalDetails = ({ user }: IModalDetailsProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Tooltip hasArrow label='Xem chi tiết'>
				<IconButton
					size='sm'
					colorScheme='blue'
					aria-label='Xem chi tiết tài khoản'
					icon={<i className='bx bx-detail'></i>}
					onClick={onOpen}
				/>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Xem chi tiết tài khoản</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{user?.last_name} {user?.first_name}
					</ModalBody>

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
