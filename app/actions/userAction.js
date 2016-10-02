import user from '../api/userApi'
import * as types from '../constants/actionTypes'
import Response from '../api/response'
import UserCollection from '../model/user/UserCollection'

export function createUserSuccess(response) {
    return {
        type: types.CREATE_USER_SUCCESSFULLY,
        payload : response,
        redirect : {
            /** @TODO - obtain uri from router */
            url: '/users/view/'+response.data.uuid
        }
    }
}

export function createUserFailure(error) {
    return {
        type: types.CREATE_USER_FAILURE,
        error
    }
}

export function updateUserSuccess(response) {
    return {
        type: types.UPDATE_USER_SUCCESSFULLY,
        payload : response,
        redirect : {
            /** @TODO - obtain uri from router */
            url: '/users/view/'+response.data.uuid
        }
    }
}

export function updateUserFailure(error) {
    return {
        type: types.UPDATE_USER_FAILURE,
        error
    }
}

export function fetchUsersSuccess(response) {

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

export function fetchUsersFailure(error) {
    return {
        type: types.FETCH_USERS_FAILURE,
        error
    }
}

export function getUserSuccess(response) {
    return {
        type: types.FETCH_USER_SUCCESSFULLY,
        payload: response
    }
}

export function getUserFailure(error) {
    return {
        type: types.FETCH_USER_FAILURE,
        error
    }
}

export function removeUserSuccess(id) {
    return {
        type: types.REMOVE_USER_SUCCESSFULLY,
        payload: {
            data: {
                id: id
            }
        },
        redirect : {
            /** @TODO - obtain uri from router */
            url: '/users'
        }
    }
}

export function removeUserFailure() {
    return {
        type: types.REMOVE_USER_FAILURE
    }
}

export function removeUser(id) {
    return dispatch => user.removeUser(id)
        .then(json => dispatch(removeUserSuccess(id)))
        .catch(error => console.log(error))
        // .catch(error => dispatch(removeUserFailure()))
}

export function getUserList() {
    return dispatch => user.fetchUser()
        .then(json => dispatch((fetchUsersSuccess(Response.parseJsonResponse(json)))))
        .catch(error => dispatch(fetchUsersFailure(error)))
}

export function getUser(id) {
    return dispatch => user.getUser(id)
        .then(json => dispatch(getUserSuccess(json)))
        .catch(error => dispatch(getUserFailure(error)))
}

export const USERFORM_TYPE_CREATE = 'user::add'
export const USERFORM_TYPE_UPDATE = 'user::update'

export function submitAddUserForm(values, type) {
    switch (type) {
        default:
        case USERFORM_TYPE_CREATE:
            return dispatch => user.createUser(values)
                .then(json => dispatch(createUserSuccess(json)))
                .catch(error => dispatch(createUserFailure(error)))

        case USERFORM_TYPE_UPDATE:
            return dispatch => user.updateUser(values)
                .then(json => dispatch(updateUserSuccess(json)))
                .catch(error => dispatch(updateUserFailure(error)))
    }
}
