import * as types from '../constants/actionTypes'

const initialState = {
    users: [],
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
                users: action.users,
                isFetching: false
            })

        case types.SUBMIT_ADD_USER_FORM:
            return Object.assign({}, state, {

            })

        case types.CREATE_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload.data.id
            })

        case types.FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {
                users: action.payload.data
            })

        case types.FETCH_USER_SUCCESS:
            return Object.assign({}, state, {
                currentUser: action.payload.data
            })

        default:
            return state
    }

}