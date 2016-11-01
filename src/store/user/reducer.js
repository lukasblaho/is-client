import * as types from '../../constant/actionTypes'
import UserCollection from '../../model/user/UserCollection'
import User from '../../model/user/User'

const initialState = {
    list: [],
    fetchedAt: null
}

export function users(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_USER:
            if (action.error) {
                return state;
            }

            var list = state.list;
            let user = User.createFromObject(action.payload)
            list.add(user)

            return Object.assign({}, state, {
                list: list
            })

        case types.FETCH_USERS:
            list = action.payload

            return Object.assign({}, state, {
                list: list,
                fetchedAt: Date.now()
            })

        case types.UPDATE_USER:
            let userData = action.payload
            console.log(state)
            var list = state.list

            let key = getUserKey(list, userData.uuid)
            console.log(key)
            list[key] = userData

            return Object.assign({}, state, {
                list: list
            })

        case types.FETCH_USER:
            return Object.assign({}, state, {
                currentUser: action.payload.data
            })

        case types.REMOVE_USER:
            return Object.assign({}, state, {
                list: state.list
            })

        case 'ERROR_ACTION': {
            return Object.assign({}, state, {
                error: true,
                errorCode: action.errorCode,
                errorMessage: action.errorMessage
            })

        }

        default:
            return state
    }
}

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