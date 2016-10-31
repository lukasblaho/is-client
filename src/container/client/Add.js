import React from 'react'
import {connect} from 'react-redux'
import ClientForm from '../../component/client/include/ClientForm'
import {doCreateClient} from '../../store/client/action'

const AddClient = (props) => (
	<div>
		<ClientForm title="Add client" {...props}/>
	</div>
)

export default connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            onSubmit : (values) => {
                dispatch(doCreateClient(values))
            }
        }
    }
)(AddClient)

