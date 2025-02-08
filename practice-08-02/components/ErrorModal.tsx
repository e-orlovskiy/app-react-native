import { useEffect } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useStore } from '../store/store'

export default function ErrorModal() {
	const serverError = useStore(state => state.serverError)
	const setServerError = useStore(state => state.setServerError)

	useEffect(() => {
		if (serverError) {
			const timerId = setTimeout(() => {
				setServerError(null)
			}, 4000)
			return () => clearTimeout(timerId)
		}
	}, [serverError])

	return (
		<Modal
			visible={!!serverError}
			transparent
			animationType='fade'
			onRequestClose={() => setServerError(null)}
		>
			<View style={styles.overlay}>
				<View style={styles.modal}>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={() => setServerError(null)}
					>
						<Text style={styles.closeText}>✕</Text>
					</TouchableOpacity>
					<Text style={styles.errorText}>{serverError}</Text>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	modal: {
		backgroundColor: 'white',
		margin: 20,
		padding: 20,
		borderRadius: 8,
		position: 'relative'
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		padding: 8
	},
	closeText: { fontSize: 18 },
	errorText: {
		marginVertical: 16,
		fontSize: 16,
		textAlign: 'center'
	}
})
