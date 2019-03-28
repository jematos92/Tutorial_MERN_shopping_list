// Reducer is where the actual state is going to go,
// this where we check our actions.
// This is where we check our actions. (get Items, add Items)
// it will dispatch to our recuder. and can have payload
// Server to reducer communication.

import {
  AuthState,
  AuthActionTypes,
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL
} from "./types";
import { localStorageToken } from "../../constants/constants";

const initialStatetate: AuthState = {
  isAuthenticated: null,
  isLoading: false,
  token: localStorage.getItem(localStorageToken),
  user: null
};

//** A function that takes the inital state an action to perform and returns the new state */
var itemReducer = function(
  state = initialStatetate,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case USER_LOADING:
      var newState: AuthState = {
        ...state,
        isLoading: true
      };
      return newState;
    case USER_LOADED:
      var newState: AuthState = {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      var newState: AuthState = {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true
      };
      return newState;
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem(localStorageToken);
      var newState: AuthState = {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null
      };
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
