export enum authType {
	SET_USER_NAME = 'SET_USER_NAME',
}

export interface authState {
	username: null | string
}

export interface setUserNameAction {
	type: authType.SET_USER_NAME
	payload?: null | string
}
