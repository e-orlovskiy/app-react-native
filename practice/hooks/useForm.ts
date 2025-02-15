// src/hooks/useForm.ts
import { useState } from 'react'
import { FormErrors, FormValues } from '../types'

type ValidateRules = {
	[key in keyof FormValues]: (value: string) => string | null
}

export const useForm = (initialState: FormValues, validateRules: ValidateRules) => {
	const [values, setValues] = useState<FormValues>(initialState)
	const [errors, setErrors] = useState<FormErrors>({})

	const validateField = (name: keyof FormValues, value: string) => {
		const validator = validateRules[name]
		return validator ? validator(value) : null
	}

	const handleChange = (name: keyof FormValues, value: string) => {
		setValues(prev => ({ ...prev, [name]: value }))

		// Валидация в реальном времени
		const error = validateField(name, value)
		setErrors(prev => ({ ...prev, [name]: error }))
	}

	return {
		values,
		errors,
		handleChange,
		setErrors
	}
}
