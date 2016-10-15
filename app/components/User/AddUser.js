import React from 'react'
import {connect} from 'react-redux'
import UserForm from './include/UserForm'
import {submitAddUserForm, USERFORM_TYPE_CREATE} from '../../actions/userAction'

const AddUserTpl = (props) => (
	<div>
		<h1>User</h1>
		<UserForm {...props}/>
	</div>
)

export default connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            onSubmit : values =>
                dispatch(submitAddUserForm(values, USERFORM_TYPE_CREATE))
        }
    }
)(AddUserTpl)

