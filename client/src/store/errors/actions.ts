// this where we make requests to backend
import { GET_ERRORS, CLEAR_ERRORS, ErrorsActionTypes } from "./types";

//RETURN ERRROS
export const returnErrors = (
  msg: {},
  status: string,
  id = null
): ErrorsActionTypes => {
  return {
    type: GET_ERRORS,
    payload: {
      id: id,
      msg: msg,
      status: status
    }
  };
};

//CLEAR ERRORS
export const clearErrors = (): ErrorsActionTypes => {
  return {
    type: CLEAR_ERRORS
  };
};
