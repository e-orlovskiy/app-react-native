import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function Restore() {
	return (
		<View style={styles.container}>
			<Link href={'/'}>На главную</Link>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
