import { sideBarType, setToggleSideBarAction } from './sideBarType'

export const setToggleSideBar = (payload: setToggleSideBarAction) => ({
	type: sideBarType.TOGGLE_SIDE_BAR,
	payload,
})
