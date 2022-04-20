import { SET_USER_NAME } from './authType'

export const setUserName = payload => ({
	type: SET_USER_NAME,
	payload,
})
