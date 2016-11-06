import React from 'react'

export default class TableBody extends React.Component {
    render() {
        const { datasource, renderRowComponent, columnCount } = this.props

        if (!datasource.length) {
            return (
                <tbody>
                    <tr><td colSpan={columnCount}>
                        There is empty datasource
                </td></tr>
                </tbody>
            )
        }

        const rows = datasource.map(item => renderRowComponent(item))

        return (
            <tbody>
                {rows}
            </tbody>
        )
    }
}