import React from 'react'
import {connect} from 'react-redux'

const ViewUserTpl = ({currentUser}) => (
    <div>
        <h1>View User</h1>
        <dl>
            <dt>Name:</dt> <dd>{currentUser.firstName}</dd>
            <dt>Last name:</dt> <dd>{currentUser.lastName}</dd>
        </dl>
    </div>
)

var ViewUser = connect(
    (state, ownProps) => {
        let currentUser = state.users.list.filter((v) => {
            return v.uuid == ownProps.routeParams.id
        }).pop()

        if (!currentUser) {
            throw "User not found by uuid: " + ownProps.routeParams.id
        }

        return {
            currentUser : currentUser
        }
    },
    (dispatch) => {
        return {}
    })(ViewUserTpl)


export default ViewUser