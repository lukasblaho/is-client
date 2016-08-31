import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from '../stores/store'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from '../components/App'
import Home from '../components/Home'
import User from '../components/User/User'
import AddUser from '../components/User/AddUser'
import EditUser from '../components/User/EditUser'
import RemoveUser from '../components/User/RemoveUser'
import ViewUser from '../components/User/ViewUser'
import NotFound from '../components/NotFound'

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
                    </Route>
                    <Route path="*" component={NotFound}/>
                </Router>
            </Provider>
        )
    }
}