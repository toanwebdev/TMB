import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react'
import { useField } from 'formik'

interface InputFieldProps {
	name: string
	label?: string
	placeholder?: string
	type: string
	textarea?: boolean
	isRequired?: boolean
	onChange?: any
	value?: string | number
}

const InputField = ({ isRequired, textarea, ...props }: InputFieldProps) => {
	const [field, { error }] = useField(props)

	let body
	if (textarea) {
		body = <Textarea {...field} id={field.name} {...props} />
	} else {
		body = <Input {...field} id={field.name} {...props} />
	}

	return (
		<FormControl isInvalid={!!error} isRequired={isRequired}>
			{props.label && <FormLabel htmlFor={field.name}>{props.label}</FormLabel>}
			{body}
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	)
}

export default InputField
