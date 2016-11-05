import * as types from '../../constant/actionTypes'
import UserCollection from '../../model/user/UserCollection'
import User from '../../model/user/User'
import reducerFactory from '../../service/reducerFactory'

export const users = reducerFactory({
    initialState: {
        list: [],
        fetchedAt: null
    },

    [types.CREATE_USER](state, action) {
        if (action.error) {
            return state;
        }

        var list = state.list;
        let user = User.createFromObject(action.payload)
        list.add(user)

        return {
            list: list
        }
    },

    [types.FETCH_USERS](state, action) {
        let newList = action.payload

        return {
            list: newList,
            fetchedAt: Date.now()
        }
    },

    [types.UPDATE_USER](state, action) {
        let userData = action.payload
        var newlist = state.list

        let key = getUserKey(newlist, userData.uuid)
        newlist[key] = userData

        return {
            list: newlist
        }
    },

    [types.FETCH_USER](state, action) {
        return {
            currentUser: action.payload.data
        }
    },

    [types.REMOVE_USER](state, action) {
        return {
            list: state.list
        }
    },

    'ERROR_ACTION'(state, action) {
        return {
            error: true,
            errorCode: action.errorCode,
            errorMessage: action.errorMessage
        }
    }
})

export function getUserList(state) {
    return UserCollection.fromArray(state.users.list)
}

export function getUserById(state, id) {
    return getUserList(state).find(id)
}

function getUserKey(list, id) {
    var key;

    list.forEach((v, i) => {
        if (v.uuid === id) {
            key = i
        }
    })
    return key
}