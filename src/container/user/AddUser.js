import React from 'react'
import { connect } from 'react-redux'
import UserForm from '../../component/user/include/UserForm'
import { doCreateUser } from '../../store/user/action'

const AddUserTpl = (props) => (
    <div>
        <h1>User</h1>
        <UserForm {...props} />
    </div>
)

export default connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            onSubmit: values =>
                dispatch(doCreateUser(values))
        }
    }
)(AddUserTpl)

