import React from 'react'
import {connect} from 'react-redux'
import {removeUser} from '../../actions/userAction'

const RemoveUserTmp = ({currentUser, onDeleteClick}) => {
    return (
        <div className="container">
            <div className="row show-grid">
                <h2>Remove User</h2>
            </div>
            <div className="row">
                <p>Are you sure to delete user <em>{currentUser.firstName} {currentUser.lastName}</em>?</p>
                <button onClick={() => onDeleteClick(currentUser.id)} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

const RemoveUser = connect(
    (state, ownProps) => {
        return {
            currentUser: state.users.users[ownProps.params.id]
        }
    },
    dispatch => {
        return {
            onDeleteClick: (id) => {
                dispatch(removeUser(id))
            }
        }
    }
)(RemoveUserTmp)
export default RemoveUser
