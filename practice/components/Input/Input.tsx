import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { InputProps } from '../../types'
import styles from './styles'
function Input({
	label,
	value,
	onChangeText,
	error,
	secureTextEntry,
	autoCapitalize = 'none',
	keyboardType = 'default'
}: InputProps) {
	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.input, error && styles.errorBorder]}
				value={value}
				onChangeText={onChangeText}
				placeholder={label}
				secureTextEntry={secureTextEntry}
				autoCapitalize={autoCapitalize}
				keyboardType={
					keyboardType as 'default' | 'email-address' | 'numeric' | 'phone-pad'
				}
			/>
			{error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	)
}

export default Input
