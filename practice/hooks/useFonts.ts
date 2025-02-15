import * as Font from 'expo-font'

export const useFonts = async () => {
	await Font.loadAsync({
		'IBMPlexMono-Regular': require('../assets/fonts/IBMPlexMono-Regular.ttf'),
		'IBMPlexMono-Bold': require('../assets/fonts/IBMPlexMono-Bold.ttf'),
		'IBMPlexMono-Medium': require('../assets/fonts/IBMPlexMono-Medium.ttf')
	})
}
