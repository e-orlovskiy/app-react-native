import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { useFonts } from './hooks/useFonts'
import BottomTabNavigator from './navigation/BottomTabNavigator'

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	useEffect(() => {
		const loadFonts = async () => {
			await useFonts()
			setFontsLoaded(true)
		}

		loadFonts()
	}, [])

	if (!fontsLoaded) {
		return null
	}

	return (
		<NavigationContainer>
			<BottomTabNavigator />
		</NavigationContainer>
		// <View style={styles.container}>
		// 	<LoginScreen />
		// </View>
	)
}
