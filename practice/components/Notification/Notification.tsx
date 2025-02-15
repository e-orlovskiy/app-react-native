// src/components/Notification/index.tsx
import React, { useEffect } from 'react'
import { Animated, Text } from 'react-native'
import styles from './styles'

interface NotificationProps {
	message: string
	isVisible: boolean
}

const Notification: React.FC<NotificationProps> = ({ message, isVisible }) => {
	const opacity = new Animated.Value(0)

	useEffect(() => {
		if (isVisible) {
			// Плавное появление
			Animated.timing(opacity, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true
			}).start()

			// Плавное исчезновение через 3 секунды
			const timer = setTimeout(() => {
				Animated.timing(opacity, {
					toValue: 0,
					duration: 300,
					useNativeDriver: true
				}).start()
			}, 3000)

			return () => clearTimeout(timer)
		}
	}, [isVisible])

	if (!isVisible) return null

	return (
		<Animated.View style={[styles.container, { opacity }]}>
			<Text style={styles.text}>{message}</Text>
		</Animated.View>
	)
}

export default Notification
