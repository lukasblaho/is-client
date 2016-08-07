import fetch from 'isomorphic-fetch'

export const REQUEST_USERS = 'request_users'
export function requestUsers() {
	return {
		type : REQUEST_USERS,
	}
}

export const RECIEVE_USERS = 'recieve_users'
export function recieveUsers(users) {
	return {
		type : RECIEVE_USERS,
		users
	}
}

export function fetchUsers(){
	return function(dispatch) {
		dispatch(requestUsers())

		return fetch('http://api.storage_sys.loc/user')
			.then(response => response.json())
			.then(json => dispatch(recieveUsers(json)))
			.catch(error => console.log)
	}
}