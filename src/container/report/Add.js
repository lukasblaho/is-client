import React from 'react';
import Form from '../../component/report/include/Form'
import { connect } from 'react-redux'
import { doCreateReport } from '../../store/report/action'
import { getUserList } from '../../store/user/reducer'
import { getClientList } from '../../store/client/reducer'
import { doFetchClientList } from '../../store/client/action'
import { doFetchUserList } from '../../store/user/action'

const AddReport = React.createClass({
    componentWillMount() {
        let {dispatch} = this.props

        dispatch(doFetchUserList())
        dispatch(doFetchClientList())
    },

    render() {
        return (
            <Form {...this.props} />
        )
    }
})

export default connect(
    (state) => {
        const userOptions = getUserList(state).getOptionList()
        const clientOptions = getClientList(state).getOptionList();

        return {
            userOptions,
            clientOptions
        }
    },
    (dispatch) => {
        return {
            dispatch,
            onSubmit: (values) => dispatch(doCreateReport(values)),
        }
    }
)(AddReport)