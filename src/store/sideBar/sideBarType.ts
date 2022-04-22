export enum sideBarType {
	TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR',
}

export interface sideBarState {
	open: boolean
}

export interface setToggleSideBarAction {
	type: sideBarType.TOGGLE_SIDE_BAR
	payload: boolean
}
