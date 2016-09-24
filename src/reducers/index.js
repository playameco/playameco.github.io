import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import materialsReducer from './materialsReducer'
import mapReducer from './mapReducer'
import userUpdate from './routerAuth'

const appReducer = combineReducers({
  usersReducer,
  materialsReducer,
  mapReducer,
  userUpdate
})

const reducer = (state, action) => {
	// switch (action.type) {
	// 	case 'LOGGED_OUT':
	// 	state = undefined;
	// }

	return appReducer(state, action)
}
export default reducer
