// Import types
import {
    INPUT_SUCCESS,
    INPUT_FAIL,
    SESSION_SUCCESS,
    SESSION_FAIL,
    MESSAGE_SUCCESS,
    MESSAGE_FAIL,
  } from "../action-types";
  
  // Initial state
  const initialState = {
    messages: [],
  };
  
  // Switch statement - update state
  export default (state = initialState, action) => {
    const { type, payload } = action;
    let { messages } = state;
  
    switch (type) {
      case INPUT_SUCCESS:
        console.log(state);
        messages = [...messages, { message: payload, type: "user" }];
        return {
          ...state,
          messages,
        };
      case INPUT_FAIL:
        console.log(state);
        return {
          ...state,
        };
      case SESSION_SUCCESS:
        localStorage.setItem("session", payload["session_id"]);
        return {
          ...state,
        };
      case SESSION_FAIL:
        console.log(state);
        return {
          ...state,
        };
      case MESSAGE_SUCCESS:
        console.log(state);
        messages = [...messages, { message: payload, type: "bot" }];
        return {
          ...state,
          messages,
        };
      case MESSAGE_FAIL:
        console.log(state);
        return {
          ...state,
        };
      default:
        console.log(state);
        return {
          ...state,
        };
    }
  };
  