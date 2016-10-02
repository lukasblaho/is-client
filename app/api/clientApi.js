import {API_URL_PREFIX} from '../config'
import {userCreateSuccess, userCreateFailure} from '../actions/userAction'

export default {
    createClient(values) {
        return fetch(API_URL_PREFIX + '/v1/client', {
            method: 'post',
            body: values
        })
            .then(status)
            .then(response => response.json())
    },

    editClients(values) {
        return fetch(API_URL_PREFIX + '/v1/client', {
            method: 'put',
            body: values
        })
            .then(status)
            .then(response => response.json())
    },

    fetchClients() {
        return fetch(API_URL_PREFIX + '/v1/client')
            .then(status)
            .then(response => response.json())
    },

    getClient(id) {
        return fetch(API_URL_PREFIX + '/v1/client/' + id)
            .then(status)
            .then(response => response.json())
    },

    removeClient(id) {
        return fetch(API_URL_PREFIX + '/v1/client/' + id, {
            method: 'delete'
        })
            .then(status)
            .then(response => response.json())
    }
}
