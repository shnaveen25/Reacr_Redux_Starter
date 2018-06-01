import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/inventorymanagementapi/rest';

export const LIST_OF_USER = "userService_user_list";
export const ERROR = "userService_error";

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

export function fetchAllUsers(mailId) {
	const request = axios.get(`${ROOT_URL}/restricted/user/getallemployees?rid=${mailId}`);
		
	return request.then(
		response => fetchSuccessResponse(LIST_OF_USER, response),
		err => fetchErrorResponse(ERROR, err.response)
	);
}
