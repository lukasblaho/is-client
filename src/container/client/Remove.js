import React from 'react'
import {connect} from 'react-redux'
import {doRemoveClient} from '../../store/client/action'
import {getClientById} from '../../store/client/reducer'

const RemoveClientTmp = ({currentClient, onDeleteClick}) => {
    return (
        <div className="container">
            <div className="row show-grid">
                <h2>Remove client</h2>
            </div>
            <div className="row">
                <p>Are you sure to delete client <em>{currentClient.getName()}</em>?</p>
                <button onClick={() => onDeleteClick(currentClient.getId())} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default connect(
    (state, ownProps) => {
        const currentClient = getClientById(state, ownProps.routeParams.id)

        return {
            currentClient : currentClient
        }
    },
    dispatch => {
        return {
            onDeleteClick: (id) => {
                dispatch(doRemoveClient(id))
            }
        }
    }
)(RemoveClientTmp)
