import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
	Alert,
	Animated,
	Dimensions,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { CustomInput } from './shared/CustomInput'

// #000000
// #ff00ff

export default function App() {
	const [counter, setCounter] = useState(0)

	const animatedValue = new Animated.ValueXY({ x: 0, y: 0 })
	const animatedValue2 = new Animated.Value(100)
	const color = animatedValue2.interpolate({
		inputRange: [0, 100],
		outputRange: ['#ffffff', '#ff00ff']
	})

	Animated.timing(animatedValue, {
		toValue: { x: 50, y: 150 },
		duration: 4000,
		useNativeDriver: false
	}).start()

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue2, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false
		}).start()
	}

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue2, {
			toValue: 100,
			duration: 500,
			useNativeDriver: false
		}).start()
	}

	const alert = () => {
		Alert.alert('Информация:', `Текущее количество кликов: ${counter.toString()}`, [
			{
				text: 'Хорошо',
				onPress: () => {},
				style: 'cancel'
			}
		])
		// if (Platform.OS === 'android') {
		// 	ToastAndroid.showWithGravity(
		// 		`Текущее количество кликов: ${counter.toString()}`,
		// 		ToastAndroid.LONG,
		// 		ToastAndroid.CENTER
		// 	)
		// }
	}
	const handleClick = (n: number) => {
		setCounter(counter + n)
	}

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>Кликер</Text>
				{/* <SvgComponent /> */}
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
				<Pressable
					onPressIn={e => {
						fadeIn(e)
						alert()
					}}
					onPressOut={e => {
						fadeOut(e)
					}}
				>
					<Animated.View
						style={{
							...styles.counterWrapper,
							backgroundColor: color,
							transform: [
								{ translateX: animatedValue.x },
								{ translateY: animatedValue.y }
							]
						}}
					>
						<Text style={styles.counter}>{counter}</Text>
					</Animated.View>
				</Pressable>
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
	counterWrapper: {
		padding: 10,
		width: '50%',
		margin: 10,
		backgroundColor: 'orange'
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
