import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import {redirectMiddleware} from '../middleware/redirectMiddleware'

const loggerMiddleware = createLogger()

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(
            redirectMiddleware,
            thunkMiddleware,
            loggerMiddleware
        )
    )
}