import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

//GET user info from localstorage
const userInfoFromLocalstorage = JSON.parse(localStorage.getItem('userInfo'));

const initialState = {
    auth: { userInfo: userInfoFromLocalstorage },
};

const middlewares = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
