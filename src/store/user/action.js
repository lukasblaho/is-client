import userApi from '../../service/api/userApi'
import * as types from '../../constant/actionTypes'
import UserCollection from '../../model/user/UserCollection'

export function doFetchUserList() {
    return dispatch => userApi.fetchUsers()        
        .then(response => dispatch((fetchUsersSuccess(response))))
        .catch(error => dispatch(fetchUsersFailure(error)))
}

export function doFetchUser(id) {
    return dispatch => userApi.getUser(id)
        .then(json => dispatch(getUserSuccess(json)))
        .catch(error => dispatch(getUserFailure(error)))
}

export function doCreateUser(values) {
    return dispatch => userApi.createUser(values)
        .then(response => dispatch(createUserSuccess(response)))
        .catch(error => dispatch(createUserFailure(error)))
}

export function doUpdateUser(values) {
    return dispatch => userApi.updateUser(values)
        .then(response => dispatch(updateUserSuccess(response)))
        .catch(error => dispatch(updateUserFailure(error)))
}

export function doRemoveUser(id) {
    return dispatch => userApi.removeUser(id)
        .then(json => dispatch(removeUserSuccess(id)))
        .catch(error => dispatch(removeUserFailure()))
}

function createUserSuccess(response) {
    const payload = response.getPayload()

    return {
        type: types.CREATE_USER_SUCCESSFULLY,
        payload: payload,
        redirect: {
            /** @TODO - obtain uri from router */
            url: '/users/view/' + payload.uuid
        }
    }
}

function createUserFailure(error) {
    return {
        type: types.CREATE_USER_FAILURE,
        error
    }
}

function updateUserSuccess(response) {
    const payload = response.getPayload()

    return {
        type: types.UPDATE_USER_SUCCESSFULLY,
        payload: payload,
        redirect: {
            /** @TODO - obtain uri from router */
            url: '/users/view/' + payload.uuid
        }
    }
}

function updateUserFailure(error) {
    return {
        type: types.UPDATE_USER_FAILURE,
        error
    }
}

function fetchUsersSuccess(response) {

    var payload = {}

    if (response.isOK()) {
        var responseData = response.getPayload()
        payload.userCollection = UserCollection.fromArray(responseData);
    }

    return {
        type: types.FETCH_USERS_SUCCESSFULLY,
        payload: payload
    }
}

function fetchUsersFailure(error) {
    return {
        type: types.FETCH_USERS_FAILURE,
        error
    }
}

function getUserSuccess(response) {
    return {
        type: types.FETCH_USER_SUCCESSFULLY,
        payload: response
    }
}

function getUserFailure(error) {
    return {
        type: types.FETCH_USER_FAILURE,
        error
    }
}

function removeUserSuccess(id) {
    return {
        type: types.REMOVE_USER_SUCCESSFULLY,
        payload: {
            data: {
                id: id
            }
        },
        redirect: {
            /** @TODO - obtain uri from router */
            url: '/users'
        }
    }
}

function removeUserFailure() {
    return {
        type: types.REMOVE_USER_FAILURE
    }
}
