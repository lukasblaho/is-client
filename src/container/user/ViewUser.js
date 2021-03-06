import React from 'react'
import {connect} from 'react-redux'
import {getUserById} from '../../store/user/reducer'

const ViewUserTpl = ({currentUser}) => (
    <div>
        <h1>View User</h1>
        <dl>
            <dt>Name:</dt> <dd>{currentUser.getFirstName()}</dd>
            <dt>Last name:</dt> <dd>{currentUser.getLastName()}</dd>
        </dl>
    </div>
)

var ViewUser = connect(
    (state, ownProps) => {

        let currentUser = getUserById(state, ownProps.routeParams.id)

        return {
            currentUser : currentUser
        }
    },
    (dispatch) => {
        return {}
    })(ViewUserTpl)


export default ViewUser