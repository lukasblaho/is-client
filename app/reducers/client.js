import * as types from '../constants/actionTypes'
import ClientCollection from '../model/client/ClientCollection'

const initialState = {
    clientList: new ClientCollection()
}

export function clients(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_CLIENTS_SUCCESSFULLY:
            return Object.assign({}, state, {
                clientList: action.payload
            })

        case types.REMOVE_CLIENT_SUCCESSFULLY:
            return Object.assign({}, state, {
            })

        case types.CREATE_CLIENT_SUCCESSFULLY:
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