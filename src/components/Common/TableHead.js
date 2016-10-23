import React from 'react'

export const head = (headerKeys) => {
    var th = []
    if (headerKeys.length) {
        headerKeys.forEach((value, index) => {
            th.push(<th key={index}>{value}</th>)
        })
    }

    return (
        <thead>
        <tr>
            {th}
        </tr>
        </thead>
    )
}