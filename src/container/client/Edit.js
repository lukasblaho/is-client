import React from 'react'
import UserForm from '../../component/client/include/ClientForm'
import { connect } from 'react-redux'
import { doUpdateClient } from '../../store/client/action'
import { getClientById } from '../../store/client/reducer'
import { doFetchClientList } from '../../store/client/action'

const EditClientTpl = React.createClass({
    componentWillMount() {
        let {dispatch} = this.props

        dispatch(doFetchClientList())
    },

    render() {
        const {currentClient} = this.props
        const title = "Edit client " + currentClient.getNumber() + " " + currentClient.getName()

        return (
            <UserForm title={title} {...this.props} />
        )
    }
})

const EditClient = connect(
    (state, ownProp) => {
        const currentClient = getClientById(state, ownProp.routeParams.id)

        return {
            initialValues: {
                id: currentClient.getId(),
                number: currentClient.getNumber(),
                name: currentClient.getName(),
                quality: currentClient.getQuality(),
            },
            currentClient
        }
    },
    (dispatch) => {
        return {
            dispatch,
            onSubmit: (values) => {
                return dispatch(doUpdateClient(values))
            }
        }
    }
)(EditClientTpl)

export default EditClient

