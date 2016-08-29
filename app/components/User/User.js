import React from 'react'
import ListUser from './ListUser'

const User = React.createClass({
    render () {
        var content = this.props.children ? this.props.children : <ListUser/>;

        return (
            <section className="content">
            {content}
            </section>
        )
    }
})

export default User