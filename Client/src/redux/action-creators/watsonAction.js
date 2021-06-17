// Import types
import {
    INPUT_SUCCESS,
    INPUT_FAIL,
    SESSION_SUCCESS,
    SESSION_FAIL,
    MESSAGE_SUCCESS,
    MESSAGE_FAIL,
  } from "../action-types";
  
  //  Import axios
  import axios from "axios";
  
  //  Function that handles  users message
  export const userMessage = (message) => async (dispatch) => {
    try {
      dispatch({ type: INPUT_SUCCESS, payload: message });
    } catch (err) {
      dispatch({ type: INPUT_FAIL });
    }
  };
  
  //  Creates a session - API CALL
  export const createSession = (message) => async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:7000/api/watson/session");
      console.log(res.data);
      dispatch({ type: SESSION_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: SESSION_FAIL });
    }
  };
  
  //  Sends the message to the bot - API CALL
  export const sendMessage = (message) => async (dispatch) => {
    try {
      const body = { input: message };
      const res = await axios.post(
        "http://localhost:7000/api/watson/message",
        body
      );
      console.log(res);
      dispatch({
        type: MESSAGE_SUCCESS,
        payload: res.data.output.generic[0].text,
      });
    } catch (err) {
      dispatch({ type: MESSAGE_FAIL });
    }
  };
  