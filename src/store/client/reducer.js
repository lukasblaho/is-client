import * as types from '../../constant/actionTypes'
import ClientCollection from '../../model/client/ClientCollection'

const initialState = {
    list: []
}

export function clients(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_CLIENTS:
            return Object.assign({}, state, {
                list: action.payload
            })

        case types.REMOVE_CLIENT:
            return Object.assign({}, state, {
            })

        case types.CREATE_CLIENT:
            var newList = state.list
            newList.push({
                id: action.payload.data.id,
                firstName: action.payload.data.fistName,
                lastName: action.payload.data.lastName,
                email: action.payload.data.email,
            })

            return Object.assign({}, state, {
                list: newList
            })

        default:
            return state
    }
}

export function getClientList(state) {
    return ClientCollection.fromArray(state.clients.list)
}

export function getClientById(state, id) {
    return getClientList(state).get(id)
}