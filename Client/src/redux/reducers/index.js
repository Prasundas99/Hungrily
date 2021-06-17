import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import watson from './watson';
import { recievedFoodRequestReducer } from './volunteer.js';
import registerUserReducer from './registerUser';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: registerUserReducer,
  recievedFoodRequests: recievedFoodRequestReducer,
  watson: watson,
});

export default rootReducer;
