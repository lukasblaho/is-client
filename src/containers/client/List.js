import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {head} from '../../components/Common/TableHead'
import {tableBody} from '../../components/Common/TableBody'
import {tableList} from '../../components/Common/TableList'
import {row as clientRow} from '../../components/Client/include/ClientListTableRow'
import {fetchClientsList} from '../../store/client/action'
import {getClientList} from  '../../store/client/reducer'

const ListClient = React.createClass({
    componentWillMount()
    {
        let {dispatch} = this.props
        dispatch(fetchClientsList())
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
    clientsList: getClientList(state),
    headerKeys: ['Id', 'Number', 'Name', 'Quality']
}))(ListClient)