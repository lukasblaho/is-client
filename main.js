import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './app/containers/Root'
import storeApp from './app/stores/store'

render(
	<Root store={storeApp} history={history} />,
	document.getElementById('app-root')
)