import React from 'react'
import ListUser from '../../containers/user/ListUser'

const User = React.createClass({
    render () {
        return (
            <section className="content">
                {
                    this.props.children
                        ? this.props.children
                        : <ListUser/>
                }
            </section>

        )
    }
})

export default User