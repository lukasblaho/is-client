import React from 'react'

export default class TableHead extends React.Component {
    render() {
        const {headerKeys} = this.props

        var th = headerKeys.map((value, index) =>
            <th key={index}>{value}</th>
        )

        return (
            <thead>
                <tr>
                    {th}
                </tr>
            </thead>
        )
    }
}