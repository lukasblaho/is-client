import { browserHistory } from 'react-router'

export const redirectMiddleware = (store) => (next) => (action) => {

    let nextState = next(action)

    if (action.meta && action.meta.redirectUrl) {
        browserHistory.push(action.meta.redirectUrl)
    }

    return nextState
}