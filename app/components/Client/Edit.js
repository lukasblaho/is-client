import React from 'react'
import UserForm from './include/ClientForm'
import {connect} from 'react-redux'
import {submitAddUserForm} from '../../actions/userAction'

const EditClientTpl = (props) => {

    const {initialValues} = props

    return (
        <div className="container">
            <div className="row">
                <h2>Edit client {initialValues.firstName} {initialValues.lastName}</h2>
            </div>
            <UserForm {...props}/>
        </div>
    )
}

const EditClient = connect(
    (state, ownProp) => {
        const currentClient = state.clients.list.filter((v) => {
            return v.id == ownProp.routeParams.id
        }).pop()

        if (!currentClient) {
            throw "Client not found by id: " + ownProp.routeParams.id
        }

        return {
            initialValues: {
                id: currentClient.id,
                firstName: currentClient.firstName,
                lastName: currentClient.lastName,
                email: currentClient.email
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
)(EditClientTpl)

export default EditClient

