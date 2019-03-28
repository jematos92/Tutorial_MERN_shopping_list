// Reducer is where the actual state is going to go,
// this where we check our actions.
// This is where we check our actions. (get Items, add Items)
// it will dispatch to our recuder. and can have payload
// Server to reducer communication.

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  ErrorsActionTypes,
  errorState
} from "./types";

const initialStatetate: errorState = {
  msg: null,
  status: null,
  id: null
};

//** A function that takes the inital state an action to perform and returns the new state */
var itemReducer = function(
  state = initialStatetate,
  action: ErrorsActionTypes
): errorState {
  switch (action.type) {
    case GET_ERRORS:
      var newState: errorState = {
        id: action.payload.id,
        msg: action.payload.msg,
        status: action.payload.status
      };
      return newState;
    case CLEAR_ERRORS:
      var newState: errorState = {
        id: null,
        msg: null,
        status: null
      };
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
