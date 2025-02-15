export interface FormValues {
	email: string
	password: string
}

export interface FormErrors {
	email?: string
	password?: string
}

export interface InputProps {
	label: string
	value: string
	onChangeText: (text: string) => void
	error?: string
	secureTextEntry?: boolean
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
	keyboardType?: 'default' | 'email-address' | 'numberic' | 'phone-add'
}

export type RootStackParamList = {
	LoginTab: undefined
	Page1Tab: undefined
}

export type BottomTabParamList = {
	LoginTab: undefined
	Page1Tab: undefined
}
