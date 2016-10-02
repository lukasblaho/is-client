import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from '../stores/store'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from '../components/App'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

/* user */
import User from '../components/User/User'
import AddUser from '../components/User/AddUser'
import EditUser from '../components/User/EditUser'
import RemoveUser from '../components/User/RemoveUser'
import ViewUser from '../components/User/ViewUser'

/* client */
import Client from '../components/Client/Client'
import AddClient from '../components/Client/Add'
import EditClient from '../components/Client/Edit'
import RemoveClient from '../components/Client/Remove'
import ViewClient from '../components/Client/View'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="users" component={User}>
                            <Route path="add" component={AddUser}/>
                            <Route path="edit/:id" component={EditUser}/>
                            <Route path="remove/:id" component={RemoveUser}/>
                            <Route path="view/:id" component={ViewUser}/>
                        </Route>
                        <Route path="clients" component={Client}>
                            <Route path="add" component={AddClient}/>
                            <Route path="edit/:id" component={EditClient}/>
                            <Route path="remove/:id" component={RemoveClient}/>
                            <Route path="view/:id" component={ViewClient}/>
                        </Route>
                    </Route>
                    <Route path="*" component={NotFound}/>
                </Router>
            </Provider>
        )
    }
}