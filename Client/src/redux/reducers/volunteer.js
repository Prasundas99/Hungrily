import {
  FETCH_RECIEVED_FOOD_REQUESTS,
  FETCH_RECIEVED_FOOD_REQUESTS_FAILURE,
  FETCH_RECIEVED_FOOD_REQUESTS_SUCCESS,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const recievedFoodRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIEVED_FOOD_REQUESTS:
      return { loading: true, data: [], error: null };
    case FETCH_RECIEVED_FOOD_REQUESTS_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case FETCH_RECIEVED_FOOD_REQUESTS_FAILURE:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export { recievedFoodRequestReducer };
