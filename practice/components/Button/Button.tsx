// src/components/Button/index.tsx
import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './styles'

interface ButtonProps extends TouchableOpacityProps {
	title: string
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled }) => (
	<TouchableOpacity
		style={[styles.button, disabled && styles.disabled]}
		onPress={onPress}
		disabled={disabled}
	>
		<Text style={styles.text}>{title}</Text>
	</TouchableOpacity>
)

export default Button
