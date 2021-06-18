import {
  FETCH_USER_FOOD_REQUEST,
  FETCH_USER_FOOD_REQUEST_FAILURE,
  FETCH_USER_FOOD_REQUEST_SUCCESS,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const userFoodRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_FOOD_REQUEST:
      return { loading: true, data: [], error: null };
    case FETCH_USER_FOOD_REQUEST_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case FETCH_USER_FOOD_REQUEST_FAILURE:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export { userFoodRequestReducer };
