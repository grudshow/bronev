import { authState, authType, setUserNameAction } from './authType'

const initialState: authState = {
	username: null,
}

const authReducer = (state = initialState, action: setUserNameAction): authState => {
	switch (action.type) {
		case authType.SET_USER_NAME:
			return {
				...state,
				username: action.payload,
			}
		default:
			return state
	}
}

export default authReducer
