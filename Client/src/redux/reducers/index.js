import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import watson from './watson';
import { recievedFoodRequestReducer } from './volunteer.js';
import registerUserReducer from './registerUser';
import createFoodRequestReducer from './userFoodRequest';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: registerUserReducer,
  recievedFoodRequests: recievedFoodRequestReducer,
  userFoodRequest: createFoodRequestReducer,
  watson: watson,
});

export default rootReducer;
