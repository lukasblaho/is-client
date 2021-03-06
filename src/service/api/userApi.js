import {API_URL_PREFIX} from '../../config'
import Response from './helper/response'

export default {
    createUser(values) {
        return fetch(API_URL_PREFIX + '/v1/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: "POST",
            body: JSON.stringify(values)
        })
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json))
    },

    updateUser(values) {
        return fetch(API_URL_PREFIX + '/v1/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: "PUT",
            body: JSON.stringify(values)
        })
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json))
    },

    fetchUsers() {
        return fetch(API_URL_PREFIX + '/v1/user')
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json))
    },

    getUser(id) {
        return fetch(API_URL_PREFIX + '/v1/user/' + id)
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json))
    },

    removeUser(id) {
        return fetch(API_URL_PREFIX + '/v1/user/' + id, {
            method: "DELETE"
        })
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json))
    }
}
