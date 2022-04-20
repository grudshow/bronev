import {
	SET_DATA,
	SET_LOADING,
	SET_PAGE_QTY,
	SET_PAGE,
	SET_QUERY_SEARCH,
	SET_SUBMIT,
} from '../contants/dataType'

const initialState = {
	page: 1,
	data: null,
	loading: true,
	pageQty: 0,
	submit: false,
}

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: action.payload,
			}
		case SET_PAGE:
			return {
				...state,
				page: action.payload,
			}
		case SET_PAGE_QTY:
			return {
				...state,
				pageQty: action.payload,
			}
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			}
		// case SET_QUERY_SEARCH:
		// 	return {
		// 		...state,
		// 		querySearch: action.payload,
		// 	}
		case SET_SUBMIT:
			return {
				...state,
				submit: action.payload,
			}
		default:
			return state
	}
}

export default dataReducer
