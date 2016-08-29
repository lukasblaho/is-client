import React from 'react'
import {row} from './TableRow'

export const tableBody = (list) => {
    var rows = [];
    if (list.length) {
        list.forEach(item => {
            rows.push(
                row(item)
            )
        })
    }

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default tableBody