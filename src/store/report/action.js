import { createAction } from 'redux-actions'
import reportApi from '../../service/api/reportApi'
import * as types from '../../constant/actionTypes'

const createReportAction = createAction(
    types.CREATE_REPORT,
    response => {
        return response.getPayload()
    },
    response => ({
        redirectUrl: '/report/view'
    })
)

const fetchReportsAction = createAction(
    types.FETCH_REPORT_LIST,
    response => {
        return response.getPayload()
    }
)

const fetchReportAction = createAction(
    types.FETCH_REPORT,
    response => {
        return response.getPayload()
    }
)

export function doCreateReport(values) {
    return dispatch => reportApi.createReport(values)
        .then(response => dispatch(createReportAction(response)))
        .catch(error => dispatch(createReportAction(error)))
}

export function doFetchReports() {
    return dispatch => reportApi.fetchReports()
        .then(response => dispatch(fetchReportsAction(response)))
        .catch(error => dispatch(fetchReportsAction(error)))
}

export function doFetchReport(id) {
    return dispatch => reportApi.fetchReport(id)
        .then(response => dispatch(fetchReportAction(response)))
        .catch(error => dispatch(fetchReportAction(error)))
}


