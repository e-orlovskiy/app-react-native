import * as Location from 'expo-location'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const LocationExample = () => {
	const [locationPermission, setLocationPermission] = useState<string | null>(null)
	const [location, setLocation] = useState<Location.LocationObject | null>(null)

	// Запрос разрешения на геолокацию
	const requestLocationPermission = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync()
		setLocationPermission(status)
	}

	// Получить текущее местоположение
	const getLocation = async () => {
		const location = await Location.getCurrentPositionAsync({})
		setLocation(location)
		console.log('Location:', location)
	}

	return (
		<View style={styles.container}>
			<Text>Location Permission: {locationPermission}</Text>
			<Button title='Request Location Permission' onPress={requestLocationPermission} />

			{locationPermission === 'granted' && (
				<>
					<Button title='Get Location' onPress={getLocation} />
					{location && (
						<Text>
							Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
						</Text>
					)}
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default LocationExample
