import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import TableList from '../../component/common/TableList'
import { row as clientRow } from '../../component/client/include/ClientListTableRow'
import { doFetchClientList } from '../../store/client/action'
import { getClientList } from '../../store/client/reducer'

const ListClient = React.createClass({
    getDefaultProps() {
        return {
            headerKeys: ['Id', 'Number', 'Name', 'Quality']
        }
    },

    componentWillMount() {
        let {dispatch} = this.props
        dispatch(doFetchClientList())
    },

    render() {
        let {headerKeys, clientsList} = this.props

        return (
            <div className="container">
                <div className="row show-grid">
                    <h2>List of clients</h2>
                </div>

                <div className="row">
                    <Link className="btn btn-primary" to="/clients/add">Add new client</Link>
                    <TableList
                        datasource={clientsList}
                        headerKeys={headerKeys}
                        renderRowComponent={clientRow}
                        />
                </div>
            </div>
        )
    }
})

export default connect(state => ({
    clientsList: getClientList(state),
}))(ListClient)