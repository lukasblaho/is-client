import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import storeApp from './store/store'

ReactDOM.render(
    <Root store={storeApp} history={history}/>,
    document.getElementById('root')
);
