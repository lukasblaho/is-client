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
                <p>Are you sure to delete client <em>{currentClient.getName()}</em>?</p>
                <button onClick={() => onDeleteClick(currentClient.getId())} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default connect(
    (state, ownProps) => {
        const currentClient = state.clientList.get(ownProps.routeParams.id)

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
