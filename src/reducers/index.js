import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import materialsReducer from './materialsReducer'
import mapReducer from './mapReducer'

const appReducer = combineReducers({
  usersReducer,
  materialsReducer,
  mapReducer
})

const testApp = (state, action) => {
	switch (action.type) {
		case 'LOGGED_OUT':
		state = undefined;
	}

	return appReducer(state, action)
}
export default testApp
