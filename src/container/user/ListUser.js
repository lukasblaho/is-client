import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { row as userRow } from '../../component/user/include/UserListTableRow'
import TableList from '../../component/common/TableList'
import { doFetchUserList } from '../../store/user/action'
import { getUserList } from '../../store/user/reducer'

const ListUser = React.createClass({
    getDefaultProps() {
        return {
            headerKeys: ['First name', 'Last name', 'Email', 'Action']
        }
    },

    componentWillMount() {
        let {dispatch} = this.props
        dispatch(doFetchUserList())
    },

    render() {        
        let {users, headerKeys} = this.props

        return (
            <div className="container">
                <div className="row show-grid">
                    <h2>List of users</h2>
                </div>

                <div className="row">
                    <div className="button-group">
                        <Link className="btn btn-primary" to="/users/add">Add new user</Link>
                    </div>
                    <TableList 
                        datasource={users}
                        headerKeys={headerKeys}
                        renderRowComponent={userRow}                    
                    />
                </div>
            </div>
        )
    }
})

export default connect(
    state => ({
        users: getUserList(state)
    })
)(ListUser)