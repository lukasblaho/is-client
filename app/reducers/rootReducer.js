import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import {users} from './user'

const rootReducer = combineReducers({
    users,
    form: formReducer,
    routing: routerReducer

})

export default rootReducer