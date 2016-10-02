import React from 'react'
import {Link} from 'react-router'

const App = React.createClass({
    render() {
        return (
            <div className="container">
                <header>
                    <nav className="navbar navbar-default">
                        <ul className="nav nav-pills">
                            <li role="presentation" className="dropdown"><Link to="/">Home</Link></li>
                            <li role="presentation" className="dropdown"><Link to="/users">Users</Link></li>
                            <li role="presentation" className="dropdown"><Link to="/clients">Clients</Link></li>
                        </ul>
                    </nav>
                </header>

                {this.props.children}
            </div>
        )
    }
})

export default App