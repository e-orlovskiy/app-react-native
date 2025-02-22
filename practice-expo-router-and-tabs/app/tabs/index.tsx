import { Link } from 'expo-router'
import { View } from 'react-native'

export default function HomeScreen() {
	const product = {
		id: 1,
		name: 'Product 1',
		price: 100
	}
	return (
		<View>
			<Link href={`/index/${product.id}`}>Перейти на профиль</Link>
		</View>
	)
}
