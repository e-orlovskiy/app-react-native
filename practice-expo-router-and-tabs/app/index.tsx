import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import LoadingButton from '../components/LoadingButton'

export default function Index() {
	return (
		<View style={styles.container}>
			<Link href={'/restore'}>Переход</Link>
			<LoadingButton />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		flex: 1
		// alignItems: 'center',
		// justifyContent: 'center'
	}
})
