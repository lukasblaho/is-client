import React from 'react'
import {connect} from 'react-redux'
import ClientForm from './include/ClientForm'
import {submitAddClientForm} from '../../actions/clientAction'

const AddClientTpl = (props) => (
	<div>
		<h1>Add client</h1>
		<ClientForm {...props}/>
	</div>
)

const AddClient = connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            onSubmit : (values) => {
                dispatch(submitAddClientForm(values))
            }
        }
    }
)(AddClientTpl)

export default AddClient

