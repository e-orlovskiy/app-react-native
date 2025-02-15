// src/navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='LoginTab' component={BottomTabNavigator} />
			<Stack.Screen name='Page1Tab' component={BottomTabNavigator} />
		</Stack.Navigator>
	)
}

export default AppNavigator
