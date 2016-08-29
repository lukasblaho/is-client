import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {head} from '../Common/TableHead'
import {tableBody} from '../Common/TableBody'
import {tableList} from '../Common/TableList'
import {getUserList} from '../../actions/userAction'

const ListUser = React.createClass({
    componentDidMount()
    {
        let {dispatch} = this.props
        dispatch(getUserList())
    },

    render () {
        let {headerKeys, users} = this.props

        var TableList = tableList(head(headerKeys), tableBody(users))

        return (
            <div className="container">
                <div className="row show-grid">
                    <h2>List User</h2>
                </div>

                <div className="row">
                    <Link className="btn btn-primary" to="/users/add">Add nex user</Link>
                    <TableList/>
                </div>
            </div>
        )
    }
})

export default connect(state => ({
    users: state.users.users,
    headerKeys: ['#', 'First name', 'Last name', 'Email', 'Action']
}))(ListUser)