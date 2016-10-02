import * as types from '../constants/actionTypes'

const initialState = {
    list: [],
    isFetching: false
}

export function users(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true
            })

        case types.RECIEVE_USERS:
            return Object.assign({}, state, {
                list: action.payload.data,
                isFetching: false
            })

        case types.SUBMIT_ADD_USER_FORM:
            return Object.assign({}, state, {})

        case types.CREATE_USER_SUCCESSFULLY:
            let list = state.list;
            list.push(action.payload.data)

            return Object.assign({}, state, {
                list: list
            })

        case types.FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload.data
            })

        case types.UPDATE_USER_SUCCESSFULLY:
            let updatedUser = action.payload.data
            var list = state.list

            list.forEach((user, index) => {
                if (user.uuid == updatedUser.uuid) {
                    list[index] = updatedUser
                }
            })

            return Object.assign({}, state, {
                list: list
            })

        case types.FETCH_USER_SUCCESS:
            return Object.assign({}, state, {
                currentUser: action.payload.data
            })

        case types.REMOVE_USER_SUCCESSFULLY:
            let removedUser = action.payload.data
            var list = state.list;

            list.forEach((user, index) => {
                if (user.uuid == removedUser.id) {
                    delete list[index]
                }
            })

            return Object.assign({}, state, {
                currentUser: removedUser,
                list: list
            })

        case types.REMOVE_USER_FAILURE:
            return Object.assign({}, state, {
                currentUser: action.payload.data
            })

        default:
            return state
    }

}