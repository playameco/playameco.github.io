import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'
import materialsReducer from './materialsReducer'
import mapReducer from './mapReducer'

const appReducer = combineReducers({
  exampleReducer,
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
