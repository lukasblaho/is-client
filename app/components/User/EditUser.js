import React from 'react'
import UserForm from './include/UserForm'
import {connect} from 'react-redux'
import {getUser} from '../../actions/userAction'
import {submitAddUserForm} from '../../actions/userAction'

class EditUser extends React.Component {
    componentDidMount() {
        let {dispatch, routeParams} = this.props
        dispatch(getUser(routeParams.id))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Edit User</h2>
                </div>
                <UserForm {...this.props} submit={submit}/>
            </div>
        )
    }
}

const submit = (values, dispatch) => {
    return new Promise((resolve, reject) => {
        if (isValid(values)) {
            dispatch(submitAddUserForm(values))
            resolve()
        } else {
            reject()
        }
    })
}

export default connect(state => {
    let props = {}
    if (state.users.currentUser) {
        props = {
            initialValues : {
                id: state.users.currentUser.id,
                firstName: state.users.currentUser.firstName,
                lastName: state.users.currentUser.lastName,
                email: state.users.currentUser.email
            }
        }
    }

    return props
})(EditUser)

