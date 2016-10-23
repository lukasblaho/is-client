import {API_URL_PREFIX} from '../config'
import {userCreateSuccess, userCreateFailure} from '../store/user/action'

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
    },

    fetchUser() {
        return fetch(API_URL_PREFIX + '/v1/user')
            .then(status)
            .then(response => response.json())
    },

    getUser(id) {
        return fetch(API_URL_PREFIX + '/v1/user/' + id)
            .then(status)
            .then(response => response.json())
    },

    removeUser(id) {
        return fetch(API_URL_PREFIX + '/v1/user/' + id, {
            method: "DELETE"
        })
            .then(status)
            .then(response => response.json())
    }
}
