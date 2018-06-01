import * as Login from '../actions/LoginService';

export default function(state = {}, action) {
  switch (action.type) {

  	case Login.LOGIN:
      return { 
      	...state,
      	statusCode: action.payload.status 
      }

   default : 
   	return state;

  }
}