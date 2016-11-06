import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default class TableList extends React.Component {
    render() {
        const { datasource, headerKeys, renderRowComponent } = this.props

        return (
            <table className="table table-striped">
                <TableHead headerKeys={headerKeys} />
                <TableBody
                    datasource={datasource}
                    renderRowComponent={renderRowComponent}
                    columnCount={headerKeys.length}
                    />
            </table>
        )
    }
}