import * as types from '../../constant/actionTypes'
import reducerFactory from '../../service/reducerFactory'

export const reports = reducerFactory({
    initialState: {
        list: []
    },

    [types.CREATE_REPORT](state, action) {
        return state
    },

    [types.FETCH_REPORT_LIST](state, action) {
        return state
    }
})

 