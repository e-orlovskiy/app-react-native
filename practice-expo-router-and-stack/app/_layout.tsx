import { Stack } from 'expo-router'
import { useAtom } from 'jotai'
import { isAuthenticatedAtom } from './state/auth'

export default function RootLayout() {
	const [isAuthenticated] = useAtom(isAuthenticatedAtom)

	return (
		<Stack>
			{!isAuthenticated ? (
				<Stack.Screen
					name='(auth)'
					options={{
						headerShown: false
					}}
				></Stack.Screen>
			) : (
				<Stack.Screen
					name='(app)'
					options={{
						headerShown: false
					}}
				></Stack.Screen>
			)}
			<Stack.Screen name='+not-found' options={{ title: 'Not Found' }} />
		</Stack>
	)
}
