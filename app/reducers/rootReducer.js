import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import {users} from './user'
import {clients} from './client'

const rootReducer = combineReducers({
    users,
    clients,
    form: formReducer,
    routing: routerReducer

})

export default rootReducer