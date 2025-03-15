import AsyncStorage from '@react-native-async-storage/async-storage'
import { Redirect } from 'expo-router'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { isAuthenticatedAtom } from './state/auth'

export default function Index() {
	const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getStatus = async () => {
			try {
				const isAuthenticatedStatus = await AsyncStorage.getItem('isAuthenticatedStatus')
				console.log(isAuthenticatedStatus)
				if (isAuthenticatedStatus) {
					setIsAuthenticated(true)
				} else {
					setIsAuthenticated(false)
				}
			} catch (err) {
				console.error('Ошибка при получении статуса')
				setIsAuthenticated(false)
			} finally {
				setIsLoading(false)
			}
		}
		getStatus()
	}, [])

	if (isLoading) {
		return null
	}

	if (isAuthenticated) {
		return <Redirect href='/(app)' />
	} else {
		return <Redirect href='/(auth)/login' />
	}
}
