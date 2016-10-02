import React from 'react'
import {Link} from 'react-router'

export const row = (item) => {
    return (
        <tr key={item.uuid}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>
                <div className="btn-group">
                    <Link to={"/users/edit/" + item.uuid} className="btn btn-default">
                        <i className="glyphicon glyphicon-pencil"></i> Edit
                    </Link>
                    <Link to={"/users/view/" + item.uuid} className="btn btn-info">
                        <i className="glyphicon glyphicon-view"></i> View
                    </Link>
                    <Link to={"/users/remove/" + item.uuid} className="btn btn-danger">
                        <i className="glyphicon glyphicon-remove"></i> Delete
                    </Link>
                </div>
            </td>
        </tr>
    )
}