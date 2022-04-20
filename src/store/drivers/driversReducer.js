import { SET_QUERY_SEARCH } from './driversType'

const initialState = {
	querySearch: {
		firstname: '',
		lastname: '',
		patronymic: '',
		show_all: '',
	},
}

const driversReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_QUERY_SEARCH:
			return {
				...state,
				querySearch: action.payload,
			}
		default:
			return state
	}
}

export default driversReducer
