import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import watson from './watson';
import { recievedFoodRequestReducer } from './volunteer.js';
import registerUserReducer from './registerUser';
import createFoodRequestReducer from './userFoodRequest';
import { userFoodRequestReducer } from './fetchUserFoodRequest.js';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: registerUserReducer,
  recievedFoodRequests: recievedFoodRequestReducer,
  userCreatedFoodRequest: createFoodRequestReducer,
  userFoodRequest: userFoodRequestReducer,
  watson: watson,
});

export default rootReducer;
