import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import watson from './watson';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  watson: watson,
});

export default rootReducer;
