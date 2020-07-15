import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js'

// Identify the type of action and storing the result from the action.
// In this case, when user types in the box, that text is stored here.
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
	.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }));
}
