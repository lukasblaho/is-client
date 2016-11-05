import ApiError from '../service/api/helper/apiError'

export const errorReducerMiddleware = (store) => next => action => {
    const {payload, error} = action
    
    if (error && payload instanceof ApiError) {
        return next({
            type: 'ERROR_ACTION',
            errorCode: payload.getErrorCode(),
            errorMessage: payload.getErrorMessage()
        })
    }

    return next(action)
}
