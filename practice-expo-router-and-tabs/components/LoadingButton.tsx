import { useState } from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native'

const LoadingButton = () => {
	const [isLoading, setIsLoading] = useState(false)

	const handlePress = async () => {
		setIsLoading(true)
		try {
			await new Promise(resolve => setTimeout(resolve, 2000))
			console.log('Запрос выполнен')
		} catch (err) {
			console.log(err)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Pressable onPress={handlePress} disabled={isLoading} style={styles.button}>
			{isLoading ? (
				<>
					<Text style={styles.text}>Загрузка...</Text>
					<ActivityIndicator color='#fff' />
				</>
			) : (
				<Text style={styles.text}>Отправить</Text>
			)}
		</Pressable>
	)
}

export default LoadingButton

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'blue',
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
		width: 180,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white',
		fontSize: 20
	}
})
