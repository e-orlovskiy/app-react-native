import { Link, router } from 'expo-router'
import { useAtom } from 'jotai'
import { Button, Text, View } from 'react-native'
import { isAuthenticatedAtom } from '../state/auth'

export default function Register() {
	const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom)

	const handleRegister = () => {
		setIsAuthenticated(true)
		router.replace('/(app)/index')
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 30 }}>Register</Text>
			<Button title='Register' onPress={handleRegister} />
			<Link href='/login' style={{ fontSize: 30 }}>
				Login
			</Link>
		</View>
	)
}
