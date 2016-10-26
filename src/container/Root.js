import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from '../store/store'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from '../component/App'
import Home from '../component/Home'
import NotFound from '../component/NotFound'

/* user */
import User from '../component/user/User'
import AddUser from './user/AddUser'
import EditUser from './user/EditUser'
import RemoveUser from './user/RemoveUser'
import ViewUser from './user/ViewUser'

/* client */
import Client from '../component/client/Client'
import AddClient from './client/Add'
import EditClient from './client/Edit'
import RemoveClient from './client/Remove'
import ViewClient from '../component/client/View'

/* report */
import Report from '../component/report/Report'
import AddReport from './report/Add'

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
                        <Route path="reports" component={Report}>
                            <Route path="add" component={AddReport}/>
                        </Route>
                    </Route>
                    <Route path="*" component={NotFound}/>
                </Router>
            </Provider>
        )
    }
}