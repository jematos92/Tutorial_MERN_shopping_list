export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

interface getErrorsAction {
  type: typeof GET_ERRORS;
  payload: {
    msg: string | null;
    status: string | null;
    id: string | null;
  };
}

interface ClearErrorsAction {
  type: typeof CLEAR_ERRORS;
}

export interface errorState {
  msg: string | null;
  status: string | null;
  id: string | null;
}

export type ErrorsActionTypes = getErrorsAction | ClearErrorsAction;
