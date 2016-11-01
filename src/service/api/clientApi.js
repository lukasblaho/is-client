import {API_URL_PREFIX} from '../../config'
import Response from './response'
import ApiError from './apiError'

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
            .then(response => response.json())
            .then(json => {
                let apiResponse = Response.parseJsonResponse(json)

                if (!apiResponse.isOK()) {
                    throw new ApiError(json)
                }

                return apiResponse
            })
    },

    editClients(values) {
        return fetch(API_URL_PREFIX + '/v1/client', {
            method: 'put',
            body: values
        })
            .then(status)
            .then(response => response.json())
            .then(json => {
                let apiResponse = Response.parseJsonResponse(json)

                if (!apiResponse.isOK()) {
                    throw new ApiError(json)
                }

                return apiResponse
            })
    },

    fetchClients() {
        return fetch(API_URL_PREFIX + '/v1/client')
            .then(status)
            .then(response => response.json())
            .then(json => {
                let apiResponse = Response.parseJsonResponse(json)

                if (!apiResponse.isOK()) {
                    throw new ApiError(json)
                }

                return apiResponse
            })
    },

    getClient(id) {
        return fetch(API_URL_PREFIX + '/v1/client/' + id)
            .then(status)
            .then(response => response.json())
            .then(json => {
                let apiResponse = Response.parseJsonResponse(json)

                if (!apiResponse.isOK()) {
                    throw new ApiError(json)
                }

                return apiResponse
            })
    },

    removeClient(id) {
        return fetch(API_URL_PREFIX + '/v1/client/' + id, {
            method: 'delete'
        })
            .then(status)
            .then(response => response.json())
            .then(json => {
                let apiResponse = Response.parseJsonResponse(json)

                if (!apiResponse.isOK()) {
                    throw new ApiError(json)
                }

                return apiResponse
            })
    }
}
