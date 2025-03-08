import { atom } from 'jotai'

const isAuthenticatedAtom = atom<boolean>(false) // по дефолту пользователь не авторизован

export { isAuthenticatedAtom }
