import { dataState, dataTypeAction, dataType } from './dataType'

const initialState: dataState = {
	page: 1,
	data: null,
	loading: true,
	pageQty: 0,
	submit: false,
	querySearch: {},
}

const dataReducer = (state = initialState, action: dataTypeAction) => {
	switch (action.type) {
		case dataType.SET_DATA:
			return {
				...state,
				data: action.payload,
			}
		case dataType.SET_PAGE:
			return {
				...state,
				page: action.payload,
			}
		case dataType.SET_PAGE_QTY:
			return {
				...state,
				pageQty: action.payload,
			}
		case dataType.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			}
		case dataType.SET_QUERY_SEARCH:
			return {
				...state,
				querySearch: action.payload,
			}
		case dataType.SET_SUBMIT:
			return {
				...state,
				submit: action.payload,
			}
		default:
			return state
	}
}

export default dataReducer
