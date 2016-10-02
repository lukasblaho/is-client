import React from 'react'
import {connect} from 'react-redux'
import {removeClient} from '../../actions/clientAction'

const RemoveClientTmp = ({currentClient, onDeleteClick}) => {
    return (
        <div className="container">
            <div className="row show-grid">
                <h2>Remove client</h2>
            </div>
            <div className="row">
                <p>Are you sure to delete client <em>{currentClient.firstName} {currentClient.lastName}</em>?</p>
                <button onClick={() => onDeleteClick(currentClient.id)} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

const RemoveClient = connect(
    (state, ownProps) => {
        const currentClient = state.clients.list.filter((client) => {
            return client.id == ownProps.routeParams.id
        }).pop()

        if (!currentClient)
        {
            throw "Client not found by id"
        }

        return {
            currentClient : currentClient
        }
    },
    dispatch => {
        return {
            onDeleteClick: (id) => {
                dispatch(removeClient(id))
            }
        }
    }
)(RemoveClientTmp)
export default RemoveClient
