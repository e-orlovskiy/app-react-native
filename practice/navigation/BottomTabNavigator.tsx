// src/navigation/BottomTabNavigator.tsx
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/LoginScreen'
import Page1Screen from '../screens/Page1Screen'
import { BottomTabParamList } from '../types'

const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: '#007AFF',
				tabBarInactiveTintColor: '#8E8E93',
				tabBarStyle: {
					paddingVertical: 8,
					height: 60
				}
			}}
		>
			<Tab.Screen
				name='LoginTab'
				component={LoginScreen}
				options={{
					title: 'Логин',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='log-in' size={size} color={color} />
					),
					headerShown: false
				}}
			/>
			<Tab.Screen
				name='Page1Tab'
				component={Page1Screen}
				options={{
					title: 'Страница 1',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='document' size={size} color={color} />
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomTabNavigator
