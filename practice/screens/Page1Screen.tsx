// src/screens/Page1Screen.tsx
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Page1Screen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Страничка 1</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold'
	}
})

export default Page1Screen
