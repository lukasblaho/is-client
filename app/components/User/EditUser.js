import React from 'react'
import UserForm from './include/UserForm'
import {connect} from 'react-redux'
import {submitAddUserForm, USERFORM_TYPE_UPDATE} from '../../actions/userAction'

const EditUserTpl = (props) => {
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
        let currentUser = state.users.list.find(ownProp.routeParams.id)

        return {
            initialValues: {
                id: currentUser.getId(),
                firstName: currentUser.getFirstName(),
                lastName: currentUser.getLastName(),
                email: currentUser.getEmail()
            }
        }
    },
    (dispatch) => {
        return {
            onSubmit: (values) => {
                return dispatch(submitAddUserForm(values, USERFORM_TYPE_UPDATE))
            }
        }
    }
)(EditUserTpl)

export default EditUser

