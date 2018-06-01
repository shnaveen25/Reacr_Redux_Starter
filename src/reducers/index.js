import { combineReducers } 			from 'redux';				// A application contains only one store but can have different reduser. 
																// Combine reducer used to combine different reducer into a single root.
import { reducer as formReducer } 	from 'redux-form';
import login 						from './Login_Reducer';
import user							from './User_Reducer';

const rootReducer = combineReducers({   
  form 		: formReducer,
  login 	: login,
  user 		: user
});

export default rootReducer;
