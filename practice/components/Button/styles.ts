import { StyleSheet } from 'react-native'
import { fonts } from '../../styles/fonts'

export default StyleSheet.create({
	button: {
		backgroundColor: '#007AFF',
		padding: 12,
		borderRadius: 8,
		alignItems: 'center',
		marginTop: 10
	},
	disabled: {
		backgroundColor: '#999'
	},
	text: {
		color: 'white',
		fontSize: 16,
		fontFamily: fonts.IBMPlexMonoRegular
	}
})
