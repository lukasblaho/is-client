import { browserHistory } from 'react-router'

export const redirectMiddleware = ({getState}) => (next) => (action) => {

    let nextState = next(action)

    if (action.redirect) {
        browserHistory.push(action.redirect.url)
    }

    return nextState
}