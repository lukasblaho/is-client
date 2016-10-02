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
        let currentUser = state.users.list.filter((v) => {
            return v.uuid == ownProp.routeParams.id
        }).pop()

        if (!currentUser) {
            throw "Client not found by uuid: " + ownProp.routeParams.id
        }

        return {
            initialValues: {
                id: currentUser.uuid,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email
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

