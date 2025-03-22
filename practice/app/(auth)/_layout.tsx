import { Tabs } from 'expo-router'

export default function AuthLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false
			}}
		>
			<Tabs.Screen
				name='login'
				options={{
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='register'
				options={{
					headerShown: false
				}}
			/>
		</Tabs>
	)
}
