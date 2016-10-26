import React from 'react'
import List from './List'

const Report = React.createClass({
    render () {
        return (
            <section className="content">
                {
                    this.props.children
                        ? this.props.children
                        : <List/>
                }
            </section>

        )
    }
})

export default Report