import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface InputProps {
	label: string
	placeholder: string
	value: string
	onChangeText?: (text: string) => void
	error?: string | null
	secureTextEntry?: boolean
}

export const Input = ({
	label,
	placeholder,
	value,
	onChangeText,
	error,
	secureTextEntry = false
}: InputProps) => {
	const [isSecure, setIsSecure] = useState(secureTextEntry)

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder={placeholder}
					value={value}
					onChangeText={onChangeText}
					autoCapitalize='none'
					secureTextEntry={isSecure}
				/>
				{secureTextEntry && (
					<TouchableOpacity
						style={styles.eyeButton}
						onPress={() => setIsSecure(!isSecure)}
					>
						<Text>{isSecure ? '👁️' : '👁️'}</Text>
					</TouchableOpacity>
				)}
			</View>
			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: { marginBottom: 16 },
	label: { marginBottom: 8, fontSize: 16 },
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 12
	},
	input: {
		flex: 1,
		paddingVertical: 12
	},
	error: { color: 'red', marginTop: 4 },
	eyeButton: { padding: 8 }
})
