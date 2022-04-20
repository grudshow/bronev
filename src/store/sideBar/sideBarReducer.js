import { TOGGLE_SIDE_BAR } from './sideBarType'

const initialState = {
	open: true,
}

const sideBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SIDE_BAR:
			return {
				...state,
				open: action.payload,
			}
		default:
			return state
	}
}

export default sideBarReducer
