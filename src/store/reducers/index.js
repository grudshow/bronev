import { combineReducers } from 'redux'
import sideBarReducer from '../customize/sideBarReducer'
import authReducer from '../auth/authReducer'
import dataReducer from '../data/dataReducer'

const rootReducer = combineReducers({
	sideBarReducer,
	authReducer,
	dataReducer,
})

export default rootReducer
