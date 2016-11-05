export default function reducerFactory(reducerObject) {
    return (state = reducerObject.initialState, action) => {
        const method = action.type 

        if (!reducerObject[method]) {
            return state        
        }

        const newState = reducerObject[method](state, action)

        return Object.assign({}, state, newState)
    }
}