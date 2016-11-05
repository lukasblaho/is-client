import { API_URL_PREFIX } from '../../config'
import Response from './helper/response'

export default {
    createReport(values) {
        return fetch(API_URL_PREFIX + '/v1/report', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'post',
            body: JSON.stringify(values)
        })
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json))
    },

    fetchReports() {
         return fetch(API_URL_PREFIX + '/v1/report', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json)) 
    },

    fetchReport(id) {
         return fetch(API_URL_PREFIX + '/v1/report/' + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(status)
            .then(response => response.json())
            .then(json => Response.factory(json)) 
    }
}