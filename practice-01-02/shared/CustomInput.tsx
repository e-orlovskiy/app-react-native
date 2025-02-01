import { TextInput, TextInputProps } from 'react-native'

export function CustomInput(props: TextInputProps) {
	return (
		<TextInput
			style={{
				borderRadius: 20,
				backgroundColor: 'orange',
				color: 'black',
				height: 40,
				width: '100%'
			}}
			{...props}
		/>
	)
}
