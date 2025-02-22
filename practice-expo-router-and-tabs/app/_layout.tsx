import { Stack } from 'expo-router'

export default function RootLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='tabs' options={{ headerShown: false }} />
			<Stack.Screen name='index/[id]' options={{ presentation: 'modal' }} />
		</Stack>
	)
}
