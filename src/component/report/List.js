import React from 'react'
import {Link} from 'react-router'


const ReportList = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row show-grid">
                    <h2>Reports</h2>
                </div>

                <div className="row">
                    <Link className="btn btn-primary" to="/reports/add">Add report</Link>
                </div>
            </div>
        )
    }
})

export default ReportList
