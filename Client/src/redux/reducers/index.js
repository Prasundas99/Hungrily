import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default rootReducer;
