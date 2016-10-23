import React from 'react'
import ListClient from '../../containers/client/List'

const Client = React.createClass({
    render () {
        var content = this.props.children ? this.props.children : <ListClient/>;

        return (
            <section className="content">
            {content}
            </section>
        )
    }
})

export default Client