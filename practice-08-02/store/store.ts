import { create } from 'zustand'

interface StoreState {
	email: string
	nickname: string
	password: string
	repeatPassword: string
	errors: {
		email: string | null
		nickname: string | null
		password: string | null
		repeatPassword: string | null
	}
	serverError: string | null
	setField: (
		field: keyof Omit<
			StoreState,
			'errors' | 'serverError' | 'setField' | 'setErrors' | 'setServerError'
		>,
		value: string
	) => void
	setErrors: (errors: StoreState['errors']) => void
	setServerError: (serverError: string | null) => void
}

export const useStore = create<StoreState>(set => ({
	email: '',
	nickname: '',
	password: '',
	repeatPassword: '',
	errors: {
		email: null,
		nickname: null,
		password: null,
		repeatPassword: null
	},
	serverError: null,

	setField: (field, value) => set({ [field]: value }),
	setErrors: errors => set({ errors }),
	setServerError: serverError => set({ serverError })
}))
