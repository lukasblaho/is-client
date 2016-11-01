import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './rootReducer'
import { redirectMiddleware } from '../middleware/redirectMiddleware'
import { errorReducerMiddleware } from '../middleware/errorReducerMiddleware'

// actors
import fetcher from './actor/fetcher'

const loggerMiddleware = createLogger()

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(
            errorReducerMiddleware,
            thunkMiddleware,
            routerMiddleware(browserHistory),
            redirectMiddleware,
            loggerMiddleware,
        )
    )

    store.subscribe(() => {
        var actors = [fetcher]
        var acting = false

        if (!acting) {
            acting = true

            actors.forEach((actor) => {
                actor(store.getState(), store.dispatch)
            })

            acting = false
        }
    })

    return store
}
