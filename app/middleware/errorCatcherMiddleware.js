export const errorCatcherMiddleware = (store) => (next) => (action) => {
    try {
        return next(action)
    } catch (e) {
        console.log(e)

        return store
    }
}