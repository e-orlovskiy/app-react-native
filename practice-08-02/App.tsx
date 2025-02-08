import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TouchableOpacity
} from 'react-native'
import ErrorModal from './components/ErrorModal'
import { Input } from './components/Input'
import { useStore } from './store/store'

export default function App() {
	const {
		email,
		nickname,
		password,
		repeatPassword,
		errors,
		serverError,
		setField,
		setErrors,
		setServerError
	} = useStore()

	const handleRegister = () => {
		const newErrors = {
			email: !email ? 'Email is required' : null,
			nickname: !nickname ? 'Nickname is required' : null,
			password: !password ? 'Password is required' : null,
			repeatPassword: password !== repeatPassword ? 'Passwords do not match' : null
		}

		if (Object.values(newErrors).some(error => error !== null)) {
			setErrors(newErrors)
			return
		}

		// Simulate server request
		setServerError('Server error')
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
		>
			<ScrollView contentContainerStyle={styles.inner}>
				<Input
					label='Email'
					placeholder='Enter email'
					value={email}
					onChangeText={text => setField('email', text)}
					error={errors.email}
				/>
				<Input
					label='Nickname'
					placeholder='Enter nickname'
					value={nickname}
					onChangeText={text => setField('nickname', text)}
					error={errors.nickname}
				/>
				<Input
					label='Password'
					placeholder='Enter password'
					value={password}
					onChangeText={text => setField('password', text)}
					error={errors.password}
					secureTextEntry
				/>
				<Input
					label='Repeat Password'
					placeholder='Repeat password'
					value={repeatPassword}
					onChangeText={text => setField('repeatPassword', text)}
					error={errors.repeatPassword}
					secureTextEntry
				/>

				<TouchableOpacity
					style={[styles.button, serverError && styles.disabled]}
					onPress={handleRegister}
					disabled={!!serverError}
				>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>

				<ErrorModal />
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = {
	container: { flex: 1, marginTop: 50 },
	inner: { padding: 20, flexGrow: 1 },
	button: {
		backgroundColor: 'blue',
		padding: 16,
		borderRadius: 8,
		alignItems: 'center',
		marginTop: 20
	},
	buttonText: { color: 'white', fontSize: 16 },
	disabled: { backgroundColor: 'grey' }
}
