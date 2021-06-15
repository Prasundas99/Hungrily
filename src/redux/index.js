import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './reducers/authReducer';

const reducers = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

//GET user info from localstorage
const userInfoFromLocalstorage = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  login: { userInfo: userInfoFromLocalstorage },
};

const middlewares = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
