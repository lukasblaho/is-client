import React from 'react'
import {connect} from 'react-redux'
import {getClientById} from '../../store/client/reducer'

const ViewClient = ({currentClient}) => (
  <div>
  	<h1>View client</h1>
      <dl>
          <dt>Name</dt>
          <dd>{currentClient.getName()}</dd>
      </dl>
  </div>
)

export default connect(
    (state, ownProps) => {
        let currentClient = getClientById(state, ownProps.routeParams.id)

        return {
            currentClient
        }
    },
    (dispatch) => {}
)(ViewClient)