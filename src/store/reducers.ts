import { combineReducers } from 'redux'
import sideBarReducer from './sideBar/sideBarReducer'
import authReducer from './auth/authReducer'
import dataReducer from './data/dataReducer'

export const rootReducer = combineReducers({
	sideBarReducer,
	authReducer,
	dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>
