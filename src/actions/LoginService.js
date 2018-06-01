import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/inventorymanagementapi/rest';

export const LOGIN = "loginService_login";
export const ERROR = "loginService_error"

function fetchSuccessResponse(actionType, response) {
	return {
		type: actionType,
		payload: response
	}
}

function fetchErrorResponse(actionType, error) {
	return {
		type: actionType,
		payload: error
 	}
}

export function login(data, callback) {
	const request = axios.post(`${ROOT_URL}/auth/userauthorize`, data);
			request.then((response) => callback(response));
			request.catch((err) => callback(err.response));

	return request.then(
		response => fetchSuccessResponse(LOGIN, response),
		err => fetchErrorResponse(ERROR, err.response)
	);
}
