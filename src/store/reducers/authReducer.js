import { SET_USER_NAME } from '../contants/authType'

const initialState = {
	username: null,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_NAME:
			return {
				...state,
				username: action.payload,
			}
		default:
			return state
	}
}

export default authReducer
