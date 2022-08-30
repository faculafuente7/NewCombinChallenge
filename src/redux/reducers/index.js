import {combineReducers} from 'redux'

// Reducers
import usersReducers from './usersReducers'

export default combineReducers({
    users: usersReducers
})