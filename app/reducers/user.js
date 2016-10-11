import * as types from '../constants/actionTypes'
import UserCollection from '../model/user/UserCollection'
import User from '../model/user/User'

const initialState = {
    list: new UserCollection(),
    isFetching: false
}

export function users(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_USER_SUCCESSFULLY:
            let list = state.list;
            let user = User.createFromObject(action.payload.data)
            list.add(user)

            return Object.assign({}, state, {
                list: list
            })

        case types.FETCH_USERS_SUCCESSFULLY:

            var list = new UserCollection
            if (action.payload.userCollection) {
                list = action.payload.userCollection
            }

            return Object.assign({}, state, {
                list: list
            })

        case types.UPDATE_USER_SUCCESSFULLY:
            let userData = action.payload.data
            let updatedUser = User.createFromObject(userData)

            var list = state.list
            list.add(updatedUser)

            return Object.assign({}, state, {
                list: list
            })

        case types.FETCH_USER_SUCCESSFULLY:
            return Object.assign({}, state, {
                currentUser: action.payload.data
            })

        case types.REMOVE_USER_SUCCESSFULLY:
            let userId = action.payload.data.id

            var list = Object.assign(Object.create(state.list), state.list)

            /** @TODO */
            //list.remove(userId)

            return Object.assign({}, state, {
                list: list
            })

        case types.REMOVE_USER_FAILURE:
            return Object.assign({}, state, {})

        default:
            return state
    }

}