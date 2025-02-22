import { FontAwesome } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'

export default function RootLayout() {
	return (
		<Drawer
			screenOptions={{
				drawerStyle: { backgroundColor: 'black', width: 300 },
				drawerLabelStyle: { color: 'white', backgroundColor: 'red', fontSize: 20 },
				headerShown: false,
				gestureEnabled: true,
				swipeEdgeWidth: 50
			}}
		>
			<Drawer.Screen
				name='index'
				options={{
					title: 'Home',
					drawerIcon: ({ color, size }: { color: string; size: number }) => (
						<FontAwesome name='home' size={size} color={color} />
					)
				}}
			/>
			<Drawer.Screen name='about' options={{ title: 'About' }} />
		</Drawer>
	)
}
