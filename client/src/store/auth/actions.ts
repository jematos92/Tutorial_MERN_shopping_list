// this where we make requests to backend
import {
  AuthActionTypes,
  AuthState,
  USER_LOADING,
  AUTH_ERROR,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";
import User from "../../models/User";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { AppState } from "../../store";
import { ErrorsActionTypes } from "../errors/types";
import { returnErrors } from "../errors/actions";
import {
  authHeader,
  contentTypeHeader,
  registerErrorId
} from "../../constants/constants";
import { json } from "body-parser";

/**The api route for the items */
const route = "/api/auth";

export const tokenConfig = (state: AppState) => {
  //Get token from local state
  var token = state.auth.token;
  const config = {
    headers: {
      [contentTypeHeader]: "application/json",
      [authHeader]: ""
    }
  };
  if (token) {
    config.headers[authHeader] = token;
  }
  return config;
};
/**
 * This action will load the user
 */
export const loadUser = (): ThunkAction<
  void,
  AppState,
  null,
  AuthActionTypes | ErrorsActionTypes
> => (dispatch, getState): void => {
  var userLoadingAction: AuthActionTypes = {
    type: USER_LOADING
  };
  dispatch(userLoadingAction);
  var currentState = getState();
  var config = tokenConfig(currentState);
  axios
    .get<User>(`${route}/user`, config)
    .then(response => {
      var userLoadedAction: AuthActionTypes = {
        type: USER_LOADED,
        payload: response.data
      };
      dispatch(userLoadedAction);
    })
    .catch(err => {
      var returnErrorAction: ErrorsActionTypes = returnErrors(
        err.response.data.msg,
        err.response.status
      );
      var errorAction: AuthActionTypes = {
        type: AUTH_ERROR
      };
      dispatch(returnErrorAction);
      dispatch(errorAction);
    });
};

/**
 * This action will register the user
 */
export const register = (
  name: string,
  email: string,
  password: string
): ThunkAction<void, AppState, null, AuthActionTypes | ErrorsActionTypes> => (
  dispatch
): void => {
  const config = {
    headers: {
      [contentTypeHeader]: "application/json",
      [authHeader]: ""
    }
  };
  var body = JSON.stringify({
    name,
    email,
    password
  });
  axios
    .post("/api/users", body, config)
    .then(response => {
      var registerSuccessAction: AuthActionTypes = {
        type: REGISTER_SUCCESS,
        payload: response.data
      };
      dispatch(registerSuccessAction);
    })
    .catch(err => {
      var returnErrorAction: ErrorsActionTypes = returnErrors(
        err.response.data.msg,
        err.response.status,
        registerErrorId
      );
      var errorAction: AuthActionTypes = {
        type: REGISTER_FAIL
      };
      dispatch(returnErrorAction);
      dispatch(errorAction);
    });
};
