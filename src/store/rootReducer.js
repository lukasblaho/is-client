import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { users } from '../store/user/reducer'
import { clients } from '../store/client/reducer'
import { reports } from '../store/report/reducer'

const rootReducer = combineReducers({
    users,
    clients,
    reports,
    form: formReducer,
    routing: routerReducer
})

export default rootReducer