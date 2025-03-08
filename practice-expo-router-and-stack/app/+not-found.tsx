import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function NotFound() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 30 }}>Not Found</Text>
			<Link href='/' style={{ fontSize: 30 }}>
				Home
			</Link>
		</View>
	)
}
