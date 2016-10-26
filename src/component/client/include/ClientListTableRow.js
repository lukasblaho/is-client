import React from 'react'
import {Link} from 'react-router'

export const row = (item) => {
    return (
        <tr key={item.getId()}>
            <td>{item.getId()}</td>
            <td>{item.getNumber()}</td>
            <td>{item.getName()}</td>
            <td>{item.getQuality()}</td>
            <td>
                <div className="btn-group">
                    <Link to={"/clients/edit/" + item.getId()} className="btn btn-default">
                        <i className="glyphicon glyphicon-pencil"></i> Edit
                    </Link>
                    <Link to={"/clients/view/" + item.getId()} className="btn btn-info">
                        <i className="glyphicon glyphicon-view"></i> View
                    </Link>
                    <Link to={"/clients/remove/" + item.getId()} className="btn btn-danger">
                        <i className="glyphicon glyphicon-remove"></i> Delete
                    </Link>
                </div>
            </td>
        </tr>
    )
}