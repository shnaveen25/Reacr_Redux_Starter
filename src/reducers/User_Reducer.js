import * as User from '../actions/UserService';

export default function(state = {}, action) {
  switch (action.type) {

  	case User.LIST_OF_USER:
      return { 
      	...state,
      	usersData: action.payload.data.employees,  
      	statusCode: action.payload.status 
      }

   default : 
   	return state;

  }
}