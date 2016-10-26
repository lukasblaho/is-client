import React from 'react'
import UserForm from '../../component/user/include/UserForm'
import {connect} from 'react-redux'
import {submitAddUserForm, USERFORM_TYPE_UPDATE} from '../../store/user/action'
import {getUserById} from '../../store/user/reducer'

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

export default  connect(
    (state, ownProp) => {
        let currentUser = getUserById(state, ownProp.routeParams.id)

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
            onSubmit: values =>
                dispatch(submitAddUserForm(values, USERFORM_TYPE_UPDATE))
        }
    }
)(EditUserTpl)

