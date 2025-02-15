// src/screens/LoginScreen.tsx
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Notification from '../components/Notification/Notification'
import { useForm } from '../hooks/useForm'
import globalStyles from '../styles/global'
import { RootStackParamList } from '../types'
import { validateEmail, validatePassword } from '../utils/validation'

const LoginScreen: React.FC = () => {
	const { values, errors, handleChange } = useForm(
		{ email: '', password: '' },
		{
			email: validateEmail,
			password: validatePassword
		}
	)

	const [notificationVisible, setNotificationVisible] = useState(false)

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	const handleSubmit = () => {
		if (!notificationVisible) {
			setNotificationVisible(true)
			navigation.navigate('Page1Tab')
		}
	}

	useEffect(() => {
		if (notificationVisible) {
			const timer = setTimeout(() => {
				setNotificationVisible(false)
			}, 3300) // 3000ms для показа + 300ms для анимации исчезновения

			return () => clearTimeout(timer)
		}
	}, [notificationVisible])

	return (
		<KeyboardAvoidingView
			style={globalStyles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<View style={globalStyles.formContainer}>
				<Input
					label='Email'
					value={values.email}
					onChangeText={text => handleChange('email', text)}
					error={errors.email}
					autoCapitalize='none'
					keyboardType='email-address'
				/>

				<Input
					label='Password'
					value={values.password}
					onChangeText={text => handleChange('password', text)}
					secureTextEntry
					error={errors.password}
				/>

				<Button
					title='Войти'
					onPress={handleSubmit}
					disabled={!!errors.email || !!errors.password}
				/>

				<Notification
					message='Ошибка при входе. Проверьте данные.'
					isVisible={notificationVisible}
				/>
			</View>
		</KeyboardAvoidingView>
	)
}

export default LoginScreen
