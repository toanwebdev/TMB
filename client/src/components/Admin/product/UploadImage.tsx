import {
	Box,
	Flex,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import styles from '../../../styles/Admin/product/UploadImage.module.scss'

interface IUploadImageProps {
	item?: boolean
	index?: number
	id: string
	name?: string
	value?: string
	resetDel?: boolean
	handleUploadImage: any
	className?: string
}

const UploadImage = ({
	item,
	index,
	id,
	name,
	value,
	handleUploadImage,
	className,
}: IUploadImageProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [image, setImage] = useState('')

	const initFile: any = ''
	const [file, setFile] = useState(initFile)

	const [del, setDel] = useState(false)
	const [handleDel, setHandleDel] = useState(false)

	const handleChangeImage = (e: any) => {
		const fileItem = e.target.files[0]

		if (fileItem) {
			const reader = new FileReader()
			reader.onload = () => {
				if (reader.readyState === 2) {
					setImage(reader.result as string)
				}
			}

			reader.readAsDataURL(fileItem)
			setFile(fileItem)
		}

		if (del) {
			setDel(false)
		}
	}

	const handleDelete = () => {
		setDel(true)
		setHandleDel(!handleDel)
	}

	useEffect(() => {
		if ((file || value) && (image || del)) {
			handleUploadImage(id, file, image, del, index)
		}
	}, [image, handleDel])

	let body

	if (value === '' || value === 'del') {
		body = (
			<Flex
				direction='column'
				justifyContent='center'
				alignItems='center'
				position='absolute'>
				<i
					className='bx bxs-cloud-upload'
					style={item ? { fontSize: '40px' } : { fontSize: '85px' }}></i>
				<p style={item ? { fontSize: '12px' } : { fontSize: '16px' }}>
					Duyệt hình ảnh để tải lên
				</p>
			</Flex>
		)
	} else {
		body = (
			<Box>
				<Image
					className={styles.image}
					w={item ? '200px' : '520px'}
					h={item ? '150px' : '300px'}
					objectFit='contain'
					src={value ? value : image}
					alt={name ? name : ''}
				/>
				<Box className={styles.image_icon}>
					<i className='bx bx-show-alt' onClick={onOpen}></i>
					<i className='bx bx-trash-alt' onClick={handleDelete}></i>
				</Box>
			</Box>
		)
	}

	return (
		<Box className={className}>
			<Flex
				justifyContent='center'
				alignItems='center'
				className={styles.upload}
				borderStyle={value !== '' && value !== 'del' ? 'solid' : 'dashed'}
				w={item ? '200px' : ''}
				h={item ? '150px' : '300px'}>
				<Box className={styles.upload_input}>
					<input onChange={handleChangeImage} type='file' />
				</Box>
				{body}
			</Flex>

			<Modal isOpen={isOpen} onClose={onClose} size='2xl'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Image
							m='30px 0'
							width='100%'
							objectFit='contain'
							src={value}
							alt={name ? name : ''}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default UploadImage
