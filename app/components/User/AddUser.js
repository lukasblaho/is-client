import React from 'react'
import {connect} from 'react-redux'
import UserForm from './include/UserForm'
import {submitAddUserForm} from '../../actions/userAction'

const AddUserTpl = (props) => (
	<div>
		<h1>User</h1>
		<UserForm {...props}/>
	</div>
)

const AddUser = connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            onSubmit : (values) => {
                dispatch(submitAddUserForm(values))
            }
        }
    }
)(AddUserTpl)

export default AddUser

