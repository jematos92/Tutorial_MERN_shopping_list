import User from "../../models/User";
import { tokenConfig } from "./actions";

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: User | null;
}
interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: {
    user: User;
    token: string;
  };
}
interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    user: User;
    token: string;
  };
}
interface UserLoadedSuccessAction {
  type: typeof USER_LOADED;
  payload: User;
}
interface LoadingUserAction {
  type: typeof USER_LOADING;
}
interface AuthErrorAction {
  type: typeof AUTH_ERROR;
}
interface LoginErrorAction {
  type: typeof LOGIN_FAIL;
}
interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}
interface RegisterErrorAction {
  type: typeof REGISTER_FAIL;
}

export type AuthActionTypes =
  | UserLoadedSuccessAction
  | LoadingUserAction
  | AuthErrorAction
  | LoginErrorAction
  | LogoutSuccessAction
  | RegisterErrorAction
  | LoginSuccessAction
  | RegisterSuccessAction;
