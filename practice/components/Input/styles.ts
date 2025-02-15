import { StyleSheet } from 'react-native'
import { fonts } from '../../styles/fonts'

export default StyleSheet.create({
	container: {
		marginBottom: 16
	},
	input: {
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
		fontFamily: fonts.IBMPlexMonoRegular
	},
	errorBorder: {
		borderColor: 'red'
	},
	errorText: {
		color: 'red',
		fontSize: 12,
		marginTop: 4,
		fontFamily: fonts.IBMPlexMonoMedium
	}
})
