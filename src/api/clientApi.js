import {API_URL_PREFIX} from '../config'
import Response from './response'

export default {
    createClient(values) {
        return fetch(API_URL_PREFIX + '/v1/client', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'post',
            body: JSON.stringify(values)
        })
            .then(status)
            .then(response => {
                response = Response.parseJsonResponse(response.json())

                if (response.valid()) {
                    return response
                }
            })
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
            .then(response => Response.parseJsonResponse(response.json()))
    }
}
