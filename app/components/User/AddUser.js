import React from 'react'
import UserForm from './include/UserForm'
import {submitAddUserForm} from '../../actions/userAction'

const submit = (values, dispatch) => {
    return new Promise((resolve, reject) => {
        if (isValid(values)) {
            dispatch(submitAddUserForm(values))
            resolve()
        } else {
            reject()
        }
    })
}

const isValid = (values) => {
    return true;
}

const User = () => (
	<div>
		<h1>User</h1>
		<UserForm submit={submit}/>
	</div>
)

export default User

