import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Layout() {
	const insets = useSafeAreaInsets()

	return (
		<SafeAreaProvider>
			<StatusBar style='light' backgroundColor='red' />
			<Stack
				screenOptions={{
					contentStyle: {
						backgroundColor: 'red',
						paddingTop: insets.top,
						paddingLeft: 10,
						paddingRight: 10
					}
				}}
			>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen name='restore' options={{ headerShown: false }} />
			</Stack>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
