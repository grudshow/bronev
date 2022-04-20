import { combineReducers } from 'redux'
import sideBarReducer from '../customize/sideBarReducer'
import authReducer from './authReducer'
import dataReducer from './dataReducer'
import driversReducer from '../drivers/driversReducer'
import directoinsReducer from '../directoins/directoinsReducer'

const rootReducer = combineReducers({
	sideBarReducer,
	authReducer,
	dataReducer,
	driversReducer,
	directoinsReducer,
})

export default rootReducer
