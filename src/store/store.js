import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { redirectMiddleware } from '../middleware/redirectMiddleware'
import { errorReducerMiddleware } from '../middleware/errorReducerMiddleware'

const loggerMiddleware = createLogger()

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(
            errorReducerMiddleware,
            thunkMiddleware,
            redirectMiddleware,
            loggerMiddleware,
        )
    )
}
