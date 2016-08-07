import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../stores/store'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from '../components/App'
import NotFound from '../components/NotFound'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      	<Router history={history}>
          <Route path="/" component={App}>          	
          </Route>
          <Route path="*" component={NotFound} />
      	</Router>
      </Provider>
    )
  }
}