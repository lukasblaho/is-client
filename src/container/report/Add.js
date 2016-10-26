import React from 'react';
import Form from '../../component/report/include/Form'
import {connect} from 'react-redux'
import {submitCreateReport} from '../../store/report/action'
import {getUserList} from '../../store/user/reducer'
import {getClientList} from '../../store/client/reducer'

const AddReport = (props) => (
    <div>
        <Form {...props} />
    </div>
)

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
            onSubmit: (values) => dispatch(submitCreateReport(values))
        }
    }
)(AddReport)