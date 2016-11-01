import userApi from '../../service/api/userApi'
import * as types from '../../constant/actionTypes'
import { createAction } from 'redux-actions'

const createUser = createAction(
    types.CREATE_USER,
    response => {
        const payload = response.getPayload()
        return payload
    },
    response => ({ redirectUrl: '/users/view/' + response.getPayload().uuid }))

const updateUser = createAction(
    types.UPDATE_USER,
    response => response.getPayload(),
    response => ({ redirectUrl: '/users/view/' + response.getPayload().uuid })
)

const fetchUsers = createAction(
    types.FETCH_USERS,
    (response) => {
        return response.getPayload() || []
    }
)

const getUser = createAction(types.FETCH_USER, response => response)

const removeUser = createAction(
    types.REMOVE_USER,
    (response) => {
        return {
            data: {
                id: response
            }
        }
    },
    () => ({ redirectUrl: '/users' })
)

export function doFetchUserList() {
    return dispatch => userApi.fetchUsers()
        .then(response => dispatch(fetchUsers(response)))
        .catch(error => dispatch(fetchUsers(error)))
}

export function doFetchUser(id) {
    return dispatch => userApi.getUser(id)
        .then(json => dispatch(getUser(json)))
        .catch(error => dispatch(getUser(error)))
}

export function doCreateUser(values) {
    return dispatch => userApi.createUser(values)
        .then(response => dispatch(createUser(response)))
        .catch(error => dispatch(createUser(error)))
}

export function doUpdateUser(values) {
    return dispatch => userApi.updateUser(values)
        .then(response => dispatch(updateUser(response)))
        .catch(error => dispatch(updateUser(error)))
}

export function doRemoveUser(id) {
    return dispatch => userApi.removeUser(id)
        .then(json => dispatch(removeUser(id)))
        .catch(error => dispatch(removeUser(error)))
}
