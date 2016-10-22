import React from 'react'
import UserForm from './include/ClientForm'
import {connect} from 'react-redux'
import {submitAddUserForm} from '../../actions/userAction'

const EditClientTpl = (props) => {

    const {currentClient} = props

    return (
        <div className="container">
            <div className="row">
                <h2>Edit client {currentClient.getNumber()} {currentClient.getName()}</h2>
            </div>
            <UserForm {...props}/>
        </div>
    )
}

const EditClient = connect(
    (state, ownProp) => {
        const currentClient = state.clientList.get(ownProp.routeParams.id)

        return {
            initialValues: {
                id: currentClient.getId(),
                number: currentClient.getNumber(),
                name: currentClient.getName(),
                quality: currentClient.getQuality(),
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

