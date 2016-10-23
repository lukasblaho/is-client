import * as types from '../../constants/actionTypes'
import UserCollection from '../../model/user/UserCollection'
import User from '../../model/user/User'

const initialState = {
    list: new UserCollection(),
    isFetching: false
}

export function users(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_USER_SUCCESSFULLY:
            var list = state.list;
            let user = User.createFromObject(action.payload)
            list.add(user)

            return Object.assign({}, state, {
                list: list
            })

        case types.FETCH_USERS_SUCCESSFULLY:
            if (action.payload.userCollection) {
                list = action.payload.userCollection
            }

            return Object.assign({}, state, {
                list: list
            })

        case types.UPDATE_USER_SUCCESSFULLY:
            let userData = action.payload
            let updatedUser = User.createFromObject(userData)

            state.list.add(updatedUser)

            return Object.assign({}, state, {
                list: state.list
            })

        case types.FETCH_USER_SUCCESSFULLY:
            return Object.assign({}, state, {
                currentUser: action.payload.data
            })

        case types.REMOVE_USER_SUCCESSFULLY:
            return Object.assign({}, state, {
                list: state.list
            })

        case types.REMOVE_USER_FAILURE:
            return Object.assign({}, state, {})

        default:
            return state
    }
}

export function getUserList(state) {
    return state.users.list
}

export function getUserById(state, id) {
    return state.users.list.find(id)
}