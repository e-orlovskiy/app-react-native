import { CameraType, CameraView, useCameraPermissions } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CameraExample = () => {
	const [facing, setFacing] = useState<CameraType>('back')
	const [permission, requestPermission] = useCameraPermissions()
	const [photo, setPhoto] = useState<string | null>(null)
	const cameraRef = React.useRef<CameraView>(null)

	// Проверка разрешений
	if (!permission) {
		return <View /> // Загрузка разрешений
	}

	if (!permission.granted) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>We need your permission to show the camera</Text>
				<Button onPress={requestPermission} title='Grant Permission' />
			</View>
		)
	}

	// Переключение между камерами
	const toggleCameraFacing = () => {
		setFacing(current => (current === 'back' ? 'front' : 'back'))
	}

	// Сохранить фото в библиотеку
	const savePhoto = async (uri: string) => {
		const { status } = await MediaLibrary.requestPermissionsAsync()
		if (status === 'granted') {
			await MediaLibrary.saveToLibraryAsync(uri)
			alert('Photo saved')
		} else {
			alert('Permission denied')
		}
	}

	// Сделать фото
	const takePhoto = async () => {
		if (cameraRef.current) {
			try {
				const photo = await cameraRef.current.takePictureAsync()
				if (photo) {
					setPhoto(photo.uri)
					savePhoto(photo.uri)
					console.log('Photo taken:', photo.uri)
				}
			} catch (error) {
				console.error('Error taking photo:', error)
			}
		}
	}

	return (
		<View style={styles.container}>
			<CameraView style={styles.camera} facing={facing} ref={cameraRef}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
						<Text style={styles.text}>Flip Camera</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={takePhoto}>
						<Text style={styles.text}>Take Photo</Text>
					</TouchableOpacity>
				</View>
			</CameraView>
			{photo && <Image source={{ uri: photo }} style={styles.preview} />}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	message: {
		textAlign: 'center',
		paddingBottom: 10
	},
	camera: {
		flex: 1
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		margin: 64
	},
	button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white'
	},
	preview: {
		width: 200,
		height: 200,
		marginTop: 20,
		alignSelf: 'center'
	}
})

export default CameraExample
