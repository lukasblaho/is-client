import { connect } from 'react-redux'
import React from 'react'

const ViewContainer = React.createClass({
    render() {
        return (
            <div>
                <h2>View</h2>
            </div>
        )
    }
})

export default connect(() => ({}))(ViewContainer)