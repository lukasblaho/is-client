import React from 'react'
import {Link} from 'react-router'

export const row = (item) => {
    return (
        <tr key={item.getId()}>
            <td>{item.getFirstName()}</td>
            <td>{item.getLastName()}</td>
            <td>{item.getEmail()}</td>
            <td>
                <div className="btn-group">
                    <Link to={"/users/edit/" + item.getId()} className="btn btn-default">
                        <i className="glyphicon glyphicon-pencil"></i> Edit
                    </Link>
                    <Link to={"/users/view/" + item.getId()} className="btn btn-info">
                        <i className="glyphicon glyphicon-view"></i> View
                    </Link>
                    <Link to={"/users/remove/" + item.getId()} className="btn btn-danger">
                        <i className="glyphicon glyphicon-remove"></i> Delete
                    </Link>
                </div>
            </td>
        </tr>
    )
}