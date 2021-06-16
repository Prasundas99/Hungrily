import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import { recievedFoodRequestReducer } from './volunteer.js';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  recievedFoodRequests: recievedFoodRequestReducer,
});

export default rootReducer;
