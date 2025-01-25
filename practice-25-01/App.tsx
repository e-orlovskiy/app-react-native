import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CustomInput } from './shared/CustomInput'

export default function App() {
	const [counter, setCounter] = useState(0)

	const handleClick = (n: number) => {
		setCounter(counter + n)
	}

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>Кликер</Text>
				{/* <Image
					style={styles.image}
					source={require('./assets/icon.png')}
					resizeMode='contain'
				/> */}
				<View style={styles.blockWrapper}>
					<TouchableOpacity
						onPress={() => {
							handleClick(1)
						}}
					>
						<View style={styles.block}>
							<Text style={styles.text}>+1</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.block}>
						<Text style={styles.text}>+2</Text>
					</View>
					<View style={styles.block}>
						<Text style={styles.text}>+3</Text>
					</View>
					<View style={styles.block}>
						<Text style={styles.text}>+4</Text>
					</View>
				</View>
				<View>
					<Text style={styles.counter}>{counter}</Text>
				</View>
				<CustomInput />
			</View>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginTop: 60,
		flexDirection: 'column',
		height: '100%',
		backgroundColor: 'black'
	},
	header: {
		fontSize: 34,
		color: '#fff',
		textAlign: 'center',
		padding: 20
	},
	image: {
		width: 70,
		height: 70
	},
	blockWrapper: {
		flexDirection: 'row',
		gap: 10,
		padding: 10,
		flexWrap: 'nowrap',
		backgroundColor: 'orange'
	},
	block: {
		width: Dimensions.get('window').width / 4 - 17.5,
		height: 60,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 30,
		color: '#fff'
	},
	counter: {
		fontSize: 50,
		color: '#fff',
		textAlign: 'center'
	}
})

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// })
