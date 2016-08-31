import user from '../api/userApi'
import * as types from '../constants/actionTypes'

export function createUserSuccess(response) {
    return {
        type: types.CREATE_USER_SUCCESS,
        payload : response,
        redirect : {
            /** @TODO - obtain uri from router */
            url: '/users/view/'+response.data.id
        }
    }
}

export function createUserFailure(error) {
    return {
        type: types.CREATE_USER_FAILURE,
        error
    }
}

export function fetchUsersSuccess(response) {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: response
    }
}

export function fetchUsersFailure(error) {
    return {
        type: types.FETCH_USERS_FAILURE,
        error
    }
}

export function getUserSuccess(response) {
    return {
        type: types.FETCH_USER_SUCCESS,
        payload: response
    }
}

export function getUserFailure(error) {
    return {
        type: types.FETCH_USER_FAILURE,
        error
    }
}

export function getUserList() {
    return dispatch => user.fetchUser()
        .then(json => dispatch(fetchUsersSuccess(json)))
        .catch(error => dispatch(fetchUsersFailure(error)))
}

export function getUser(id) {
    return dispatch => user.getUser(id)
        .then(json => dispatch(getUserSuccess(json)))
        .catch(error => dispatch(getUserFailure(error)))
}

export function submitAddUserForm(values) {
    return dispatch => user.createUser(values)
        .then(json => dispatch(createUserSuccess(json)))
        .catch(error => dispatch(createUserFailure(error)))
}
