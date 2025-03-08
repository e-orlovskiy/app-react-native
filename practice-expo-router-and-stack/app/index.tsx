import { Redirect } from 'expo-router'
import { useAtom } from 'jotai'
import { isAuthenticatedAtom } from './state/auth'

export default function Index() {
	const [isAuthenticated] = useAtom(isAuthenticatedAtom)

	if (isAuthenticated) {
		return <Redirect href='/(app)' />
	} else {
		return <Redirect href='/(auth)/login' />
	}
}
