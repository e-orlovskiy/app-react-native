import { useSearchParams } from 'expo-router/build/hooks'
import { Text, View } from 'react-native'

export default function ProductDetail() {
	const params = useSearchParams()
	const id = params.get('id')

	return (
		<View>
			<Text> Product ID: {id}</Text>
		</View>
	)
}
