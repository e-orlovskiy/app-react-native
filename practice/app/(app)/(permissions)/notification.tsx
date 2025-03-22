import * as Notifications from 'expo-notifications'
import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// Настройка обработчика уведомлений
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true, // Показывать уведомление
		shouldPlaySound: false, // Воспроизводить звук
		shouldSetBadge: false // Устанавливать бейдж
	})
})

const NotificationExample = () => {
	const [notificationPermission, setNotificationPermission] = useState<string | null>(
		null
	)
	const [isNotificationScheduled, setIsNotificationScheduled] = useState(false) // Флаг для отслеживания запланированных уведомлений

	// Запрос разрешения на уведомления
	const requestNotificationPermission = async () => {
		const { status } = await Notifications.requestPermissionsAsync()
		setNotificationPermission(status)
	}

	// Отправить уведомление через 5 секунд
	const sendNotificationAfter5Seconds = async () => {
		if (isNotificationScheduled) {
			alert('Notification is already scheduled!')
			return
		}

		await Notifications.scheduleNotificationAsync({
			content: {
				title: 'Hello!', // Заголовок уведомления
				body: 'This is a notification after 5 seconds' // Текст уведомления
			},
			trigger: {
				type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
				seconds: 5, // Уведомление через 5 секунд
				repeats: false
			}
		})

		setIsNotificationScheduled(true) // Устанавливаем флаг, что уведомление запланировано
	}

	// Отправить ежедневное уведомление в 14:30
	const sendDailyNotification = async () => {
		console.log('test')
		await Notifications.scheduleNotificationAsync({
			content: {
				title: 'Daily Reminder!', // Заголовок уведомления
				body: 'This is your daily notification at 14:30' // Текст уведомления
			},
			trigger: {
				type: Notifications.SchedulableTriggerInputTypes.DAILY,
				hour: 2, // Час (14:00)
				minute: 13 // Минута (14:30)
			}
		})
		console.log('test 2')
	}

	// Очистить все запланированные уведомления
	const cancelAllScheduledNotifications = async () => {
		await Notifications.cancelAllScheduledNotificationsAsync()
		setIsNotificationScheduled(false) // Сбрасываем флаг
		alert('All scheduled notifications have been canceled.')
	}

	// Слушатель для получения входящих уведомлений
	useEffect(() => {
		const subscription = Notifications.addNotificationReceivedListener(notification => {
			console.log('Notification received:', notification)
		})

		// Очистка слушателя при размонтировании компонента
		return () => subscription.remove()
	}, [])

	// запланированные уведомления
	const checkScheduledNotifications = async () => {
		const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync()
		console.log('Scheduled Notifications:', scheduledNotifications)
	}

	return (
		<View style={styles.container}>
			<Text>Notification Permission: {notificationPermission}</Text>
			<Button
				title='Request Notification Permission'
				onPress={requestNotificationPermission}
			/>

			{notificationPermission === 'granted' && (
				<>
					<Button
						title='Send Notification After 5 Seconds'
						onPress={sendNotificationAfter5Seconds}
					/>
					<Button
						title='Send Daily Notification'
						onPress={async () => {
							await sendDailyNotification()
							await checkScheduledNotifications()
						}}
					/>
					<Button
						title='Cancel All Notifications'
						onPress={cancelAllScheduledNotifications}
					/>
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

export default NotificationExample
