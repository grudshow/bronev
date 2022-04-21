import { authType, setUserNameAction } from './authType'

export const setUserName = (payload: setUserNameAction) => ({
	type: authType.SET_USER_NAME,
	payload,
})
