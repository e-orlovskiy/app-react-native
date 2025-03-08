import { Link, router } from 'expo-router'
import { useAtom } from 'jotai'
import { Button, Text, View } from 'react-native'
import { isAuthenticatedAtom } from '../state/auth'

export default function Login() {
	const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom)

	const handleLogin = () => {
		setIsAuthenticated(true)
		router.replace('/(app)')
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 30 }}>Login</Text>
			<Button title='Login' onPress={handleLogin} />
			<Link href='/register' style={{ fontSize: 30 }}>
				Register
			</Link>
			<Link href='/fdasdr' style={{ fontSize: 30 }}>
				404
			</Link>
		</View>
	)
}
