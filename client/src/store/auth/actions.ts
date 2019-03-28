// this where we make requests to backend
import {
  AuthActionTypes,
  AuthState,
  USER_LOADING,
  AUTH_ERROR,
  USER_LOADED
} from "./types";
import User from "../../models/User";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { AppState } from "../../store";
import { ErrorsActionTypes } from "../errors/types";
import { returnErrors } from "../errors/actions";

/**The api route for the items */
const route = "/api/auth";

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
  //Get token from local state
  var token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json",
      "x-auth-token": ""
    }
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  axios
    .get(`${route}/user`, config)
    .then(response => {
      var userLoadedAction: AuthActionTypes = {
        type: USER_LOADED,
        payload: response.data as User
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
