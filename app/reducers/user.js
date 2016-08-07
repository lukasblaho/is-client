import {RECIEVE_USERS, REQUEST_USERS} from '../actions/userAction'

const initialState = {
	users : [],
	isFetching : false
}

export function users(state = initialState, action) {	
	switch (action.type) {
		case REQUEST_USERS:
			return Object.assign({}, state, {
				isFetching : true
			})

		case RECIEVE_USERS:
			return Object.assign({}, state, {
				users : action.users,
				isFetching : false
			})

		default:
			return state	
	}
	
}