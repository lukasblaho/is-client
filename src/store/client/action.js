import clientApi from '../../service/api/clientApi'
import * as types from '../../constant/actionTypes'
import ClientCollection from '../../model/client/ClientCollection'

export function doCreateClient(values) {
    return dispatch => clientApi.createClient(values)
        .then(response => dispatch(createClientSuccessfully(response)))
        .catch(error => dispatch(createClientFailure(error)))
}

export function doFetchClientList() {
    return dispatch => clientApi.fetchClients()
        .then((response) => {
            if (!response.isOK()) {
                throw new Error(response.getError())
            }

            const payload = {
                clientCollection: ClientCollection.fromArray(response.getPayload())
            }

            dispatch({
                type: types.FETCH_CLIENTS_SUCCESSFULLY,
                payload: payload
            })
        })
        .catch((error) => {
            dispatch({
                type: types.FETCH_CLIENTS_FAILURE,
                error
            })
        })
}

export function doFetchClient(id) {
    return dispatch => clientApi.getClient(id)
        .then(json => dispatch(getUserSuccess(json)))
        .catch(error => dispatch(getUserFailure(error)))
}

export function doUpdateClient(values) {
    return dispatch => clientApi.createClient(values)
        .then(response => dispatch(updateClientSuccessfully(response)))
        .catch(error => dispatch(updateClientFailure(error)))
}

export function doRemoveClient(id) {
    return dispatch => clientApi.removeClient(id)
        .then(response => dispatch({
            type: types.REMOVE_CLIENT_SUCCESSFULLY,
            payload: id,
            redirect: {
                url: '/clients'
            }
        }))
        .catch(error => dispatch({
            type: types.REMOVE_CLIENT_FAILURE
        }))
}

function createClientSuccessfully(response) {
    return {
        type: types.CREATE_CLIENT_SUCCESSFULLY,
        payload: response,
        redirect: {
            /** @TODO - obtain uri from router */
            url: '/clients/view/' + response.data.id
        }
    }
}

function createClientFailure(error) {
    return {
        type: types.CREATE_CLIENT_FAILURE,
        error
    }
}

function updateClientSuccessfully(response) {
    return {
        type: types.UPDATE_CLIENT_SUCCESSFULLY,
        payload: response,
        redirect: {
            /** @TODO - obtain uri from router */
            url: '/clients/view/' + response.data.id
        }
    }
}

function updateClientFailure(error) {
    return {
        type: types.UPDATE_CLIENT_FAILURE,
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



