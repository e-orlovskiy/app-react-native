import { isAuthenticatedAtom } from '@/state/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function Home() {
	const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
	const [image, setImage] = useState(null)

	const handleLogout = async () => {
		try {
			await AsyncStorage.removeItem('isAuthenticatedStatus')
			setIsAuthenticated(false)
			router.replace('/(auth)/login')
		} catch (error) {
			console.error('Возникла ошибка при logout')
		}
	}

	const pickAvatar = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.8
		})
		console.log(result)
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 30 }}>Home</Text>
			<Button title='pickAvatar' onPress={pickAvatar} />
			<Button title='Logout' onPress={handleLogout} />
		</View>
	)
}
