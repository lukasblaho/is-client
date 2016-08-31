import React from 'react'
import UserForm from './include/UserForm'
import {connect} from 'react-redux'
import {submitAddUserForm} from '../../actions/userAction'

const EditUserTpl = (props) => {
    console.log(props)
    return (
        <div className="container">
            <div className="row">
                <h2>Edit User</h2>
            </div>
            <UserForm {...props}/>
        </div>
    )
}

const EditUser = connect(
    (state, ownProp) => {
        let currentUser = state.users.users[ownProp.routeParams.id]
        return {
            initialValues: {
                id: currentUser.id,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email
            }
        }
    },
    (dispatch) => {
        return {
            onSubmit: (values) => {
                return dispatch(submitAddUserForm(values))
            }
        }
    }
)(EditUserTpl)

export default EditUser

