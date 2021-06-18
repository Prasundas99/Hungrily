import {
  CREATE_FOOD_REQUEST,
  CREATE_FOOD_REQUEST_FAILURE,
  CREATE_FOOD_REQUEST_SUCCESS,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const createFoodRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FOOD_REQUEST:
      return { loading: true, data: null, error: null };
    case CREATE_FOOD_REQUEST_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case CREATE_FOOD_REQUEST_FAILURE:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export default createFoodRequestReducer;
