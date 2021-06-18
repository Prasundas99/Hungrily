import {
  CREATE_FOOD_REQUEST,
  CREATE_FOOD_REQUEST_SUCCESS,
  CREATE_FOOD_REQUEST_FAILURE,
} from '../action-types';

// import { RootState } from '../reducers/';

import { createFoodRequest } from '../../api/foodRequest.js';

export const createUserFoodRequest =
  (preference) => async (dispatch, getState) => {
    dispatch({ type: CREATE_FOOD_REQUEST });
    try {
      const {
        userLogin: { data },
      } = getState();

      if (data) {
        const { data: createdFoodRequest } = await createFoodRequest(
          preference,
          data.token
        );
        dispatch({
          type: CREATE_FOOD_REQUEST_SUCCESS,
          payload: createdFoodRequest,
        });
      } else {
        throw new Error('Something went wrong! Please re-login again');
      }
    } catch (error) {
      dispatch({
        type: CREATE_FOOD_REQUEST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
