import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import watson from './watson';
import { recievedFoodRequestReducer } from './volunteer.js';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  recievedFoodRequests: recievedFoodRequestReducer,
  watson: watson,
});

export default rootReducer;
