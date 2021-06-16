import {
  FETCH_RECIEVED_FOOD_REQUESTS,
  FETCH_RECIEVED_FOOD_REQUESTS_FAILURE,
  FETCH_RECIEVED_FOOD_REQUESTS_SUCCESS,
} from '../action-types';

// import { RootState } from '../reducers/';

import { getRecievedFoodRequests } from '../../api/volunteer.js';

export const fetchRecievedFoodRequests = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_RECIEVED_FOOD_REQUESTS });
  try {
    const {
      userLogin: { data },
    } = getState();

    if (data) {
      const { data: recievedFoodRequestData } = await getRecievedFoodRequests(
        data.token
      );
      dispatch({
        type: FETCH_RECIEVED_FOOD_REQUESTS_SUCCESS,
        payload: recievedFoodRequestData,
      });
    } else {
      throw new Error('Something went wrong! Please re-login again');
    }
  } catch (error) {
    dispatch({
      type: FETCH_RECIEVED_FOOD_REQUESTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
