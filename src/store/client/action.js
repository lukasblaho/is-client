import clientApi from '../../service/api/clientApi'
import * as types from '../../constant/actionTypes'
import { createAction } from 'redux-actions'

const fetchClients = createAction(
    types.FETCH_CLIENTS,
    response => response.getPayload())

const createClient = createAction(
    types.CREATE_CLIENT,
    response => response.getPayload(),
    response => ({ redirectUrl: '/clients/view/' + response.getPayload().id }))

const updateClient = createAction(
    types.UPDATE_CLIENT,
    response => response.getPayload(),
    response => ({ redirectUrl: '/clients/view/' + response.getPayload().id }))

const getClient = createAction(types.FETCH_CLIENT, response => response)

const removeClient = createAction(
    types.REMOVE_CLIENT,
    response => response,
    response => ({ redirectUrl: '/clients' }))

export function doCreateClient(values) {
    return dispatch => clientApi.createClient(values)
        .then(response => dispatch(createClient(response)))
        .catch(error => dispatch(createClient(error)))
}

export function doFetchClientList() {
    return dispatch => clientApi.fetchClients()
        .then((response) => dispatch(fetchClients(response)))
        .catch((error) => dispatch(fetchClients(error)))
}

export function doFetchClient(id) {
    return dispatch => clientApi.getClient(id)
        .then(json => dispatch(getClient(json)))
        .catch(error => dispatch(getClient(error)))
}

export function doUpdateClient(values) {
    return dispatch => clientApi.editClients(values)
        .then(response => dispatch(updateClient(response)))
        .catch(error => dispatch(updateClient(error)))
}

export function doRemoveClient(id) {
    return dispatch => clientApi.removeClient(id)
        .then(response => dispatch(removeClient(id)))
        .catch(error => dispatch(removeClient(error)))
}
