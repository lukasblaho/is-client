import {API_URL_PREFIX} from '../config'
import {userCreateSuccess, userCreateFailure} from '../actions/userAction'

export default {
    createUser(values) {
        return fetch(API_URL_PREFIX + '/v1/user', {
            method: 'post',
            body: values
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
    }
}
