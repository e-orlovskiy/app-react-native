export const validateEmail = (email: string | undefined | null) => {
	if (!email) return 'Email обязателен'
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!re.test(email)) return 'Некорректный email'
	return null
}

export const validatePassword = (password: string | undefined | null) => {
	if (!password) return 'Пароль обязателен'
	if (password.length < 6) return 'Минимум 6 символов'
	return null
}
