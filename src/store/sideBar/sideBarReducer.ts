import { setToggleSideBarAction, sideBarState, sideBarType } from './sideBarType'

const initialState: sideBarState = {
	open: true,
}

const sideBarReducer = (state = initialState, action: setToggleSideBarAction) => {
	switch (action.type) {
		case sideBarType.TOGGLE_SIDE_BAR:
			return {
				...state,
				open: action.payload,
			}
		default:
			return state
	}
}

export default sideBarReducer
