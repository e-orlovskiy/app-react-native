import { isAuthenticatedAtom } from '@/state/auth'
import { router } from 'expo-router'
import { useAtom } from 'jotai'
import { Button, Text, View } from 'react-native'

export default function Home() {
	const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom)

	const handleLogout = () => {
		setIsAuthenticated(false)
		router.replace('/(auth)/login')
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 30 }}>Home</Text>
			<Button title='Logout' onPress={handleLogout} />
		</View>
	)
}
