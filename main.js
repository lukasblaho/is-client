import React from 'react'
import { render } from 'react-dom'
import Root from './app/containers/Root'
import storeApp from './app/store/store'

render(
	<Root store={storeApp} history={history} />,
	document.getElementById('app-root')
)