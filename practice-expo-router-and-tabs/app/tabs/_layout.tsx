import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <FontAwesome name='home' size={24} color={color} />
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => <FontAwesome name='cog' size={24} color={color} />
				}}
			/>
		</Tabs>
	)
}
