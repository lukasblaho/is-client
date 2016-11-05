import * as types from '../../constant/actionTypes'
import reducerFactory from '../../service/reducerFactory'
import ClientCollection from '../../model/client/ClientCollection'

export const clients = reducerFactory({
    initialState: {
        list: []
    },

    [types.FETCH_CLIENTS](state, action) {
        return {
            list: action.payload
        }
    },

    [types.REMOVE_CLIENT]() {
        return {}
    },

    [types.CREATE_CLIENT](state, action) {
        var newList = state.list
        newList.push({
            id: action.payload.data.id,
            firstName: action.payload.data.fistName,
            lastName: action.payload.data.lastName,
            email: action.payload.data.email,
        })

        return {
            list: newList
        }
    }
})

export function getClientList(state) {
    return ClientCollection.fromArray(state.clients.list)
}

export function getClientById(state, id) {
    return getClientList(state).get(id)
}