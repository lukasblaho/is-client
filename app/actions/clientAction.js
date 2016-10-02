import client from '../api/clientApi'
import * as types from '../constants/actionTypes'

export function createClientSuccessfully(response) {
    return {
        type: types.CREATE_CLIENT_SUCCESSFULLY,
        payload : response,
        redirect : {
            /** @TODO - obtain uri from router */
            url: '/clients/view/'+response.data.id
        }
    }
}

export function createClientFailure(error) {
    return {
        type: types.CREATE_CLIENT_FAILURE,
        error
    }
}

export function fetchClientsSuccessfully(response) {
    return {
        type: types.FETCH_CLIENTS_SUCCESSFULLY,
        payload: response
    }
}

export function fetchClientsFailure(error) {
    return {
        type: types.FETCH_CLIENTS_FAILURE,
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

export function removeClientSuccessfully(id) {
    return {
        type: types.REMOVE_CLIENT_SUCCESSFULLY,
        payload: id,
        redirect: {
            url: '/clients'
        }
    }
}

export function removeClient(id) {
    return dispatch => client.removeClient(id)
        .then(() => dispatch(removeClientSuccessfully(id)))
        .catch(() => dispatch(removeClientFailure()))
}

export function getClientsList() {
    return dispatch => client.fetchClients()
        .then(json => dispatch(fetchClientsSuccessfully(json)))
        .catch(error => dispatch(fetchClientsFailure(error)))
}

export function getClient(id) {
    return dispatch => client.getClient(id)
        .then(json => dispatch(getUserSuccess(json)))
        .catch(error => dispatch(getUserFailure(error)))
}

export function submitAddClientForm(values) {
    return dispatch => client.createClient(values)
        .then(json => dispatch(createClientSuccessfully(json)))
        .catch(error => dispatch(createClientFailure(error)))
}
