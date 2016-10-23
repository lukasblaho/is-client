import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {head} from '../../components/Common/TableHead'
import {tableBody} from '../../components/Common/TableBody'
import {row as userRow} from '../../components/User/include/UserListTableRow'
import {tableList} from '../../components/Common/TableList'
import {getUserList} from '../../store/user/action'

const ListUser = React.createClass({
    componentWillMount()
    {
        let {dispatch} = this.props
        dispatch(getUserList())
    },

    render () {
        let {headerKeys, users} = this.props

        const rows = []
        users.forEach((user) => {
            rows.push(userRow(user))
        })

        var TableList = tableList(head(headerKeys), tableBody(rows))

        return (
            <div className="container">
                <div className="row show-grid">
                    <h2>List of users</h2>
                </div>

                <div className="row">
                    <div className="button-group">
                        <Link className="btn btn-primary" to="/users/add">Add new user</Link>
                    </div>
                    <TableList/>
                </div>
            </div>
        )
    }
})

export default connect(state => ({
    users: state.users.list,
    headerKeys: ['First name', 'Last name', 'Email', 'Action']
}))(ListUser)