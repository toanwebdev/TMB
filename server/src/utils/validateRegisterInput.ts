import { RegisterInput } from '../types/RegisterInput'

export const validateRegisterInput = (registerInput: RegisterInput) => {
	if (!registerInput.email.includes('@')) {
		return {
			message: 'Invalid email',
			errors: [{ field: 'email', message: 'Email phải bao gồm ký tự @' }],
		}
	}

	if (registerInput.username.length <= 4) {
		return {
			message: 'Invalid username',
			errors: [{ field: 'username', message: 'Độ dài phải lớn hơn 4 ký tự' }],
		}
	}

	if (registerInput.password.length <= 4) {
		return {
			message: 'Invalid password',
			errors: [{ field: 'password', message: 'Độ dài phải lớn hơn 4 ký tự' }],
		}
	}

	return null
}
