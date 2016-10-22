import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {head} from '../Common/TableHead'
import {tableBody} from '../Common/TableBody'
import {tableList} from '../Common/TableList'
import {row as clientRow} from './include/ClientListTableRow'
import {getClientsList} from '../../actions/clientAction'

const ListClient = React.createClass({
    componentWillMount()
    {
        let {dispatch} = this.props
        dispatch(getClientsList())
    },

    render () {
        let {headerKeys, clientsList} = this.props

        const rows = []
        clientsList.forEach((client) => {
            rows.push(clientRow(client))
        })

        var TableList = tableList(head(headerKeys), tableBody(rows))

        return (
            <div className="container">
                <div className="row show-grid">
                    <h2>List of clients</h2>
                </div>

                <div className="row">
                    <Link className="btn btn-primary" to="/clients/add">Add new client</Link>
                    <TableList/>
                </div>
            </div>
        )
    }
})

export default connect(state => ({
    clientsList: state.clientList,
    headerKeys: ['Number', 'Name', 'Quality']
}))(ListClient)