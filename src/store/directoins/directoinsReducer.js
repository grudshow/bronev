import { SET_QUERY_SEARCH } from './directoinsType'

const initialState = {
	querySearch: {
		name: '',
		show_all: '',
	},
}

const directoinsReducer = (state = initialState, action) => {
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

export default directoinsReducer
