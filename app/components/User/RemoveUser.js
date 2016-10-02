import React from 'react'
import {connect} from 'react-redux'
import {removeUser} from '../../actions/userAction'
import {Link} from 'react-router'

const RemoveUserTmp = ({currentUser, onDeleteClick}) => {
    return (
        <div className="container">
            <div className="row show-grid">
                <h2>Remove User</h2>
            </div>
            <div className="row">
                <p>Are you sure to delete user <em>{currentUser.getFirstName()} {currentUser.getLastName()}</em>?</p>

                <div className="form-group">
                    <button onClick={() => onDeleteClick(currentUser.getId())} className="btn btn-danger">Delete</button>
                    <Link to='/users' className="btn btn-default">Back</Link>
                </div>
            </div>
        </div>
    )
}

const RemoveUser = connect(
    (state, ownProps) => {
        let currentUser = state.users.list.find(ownProps.routeParams.id)

        return {
            currentUser: currentUser
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
