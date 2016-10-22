import React from 'react'

export const tableBody = (rows) => {
    if (!rows.length) {
        return (
            <tbody>
                <tr><td colSpan="5">
                    There no users to show
                </td></tr>
            </tbody>
        )
    }

    return (
        <tbody>
        {rows}
        </tbody>
    )
}

export default tableBody