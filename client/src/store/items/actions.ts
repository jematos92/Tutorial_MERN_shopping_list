// this where we make requests to backend
import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  ITEMS_LOADING,
  ItemActionTypes
} from "./types";
import Item from "../../models/Item";
import IItemCreateRequest from "../../models/ItemCreateRequest";

import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { AppState } from "../../store";
import { ErrorsActionTypes } from "../errors/types";
import { returnErrors } from "../errors/actions";
import { tokenConfig } from "../auth/actions";

/**The api route for the items */
const route = "/api/items";
/**
 * Action that get all the items from the databse
 */
export const getItems = (): ThunkAction<
  void,
  AppState,
  null,
  ItemActionTypes | ErrorsActionTypes
> => (dispatch): void => {
  dispatch(setItemsLoading());
  axios
    .get<Item[]>(route)
    .then(response => {
      var getItemsActions: ItemActionTypes = {
        type: GET_ITEMS,
        payload: response.data
      };
      dispatch(getItemsActions);
    })
    .catch(err => {
      var returnErrorAction: ErrorsActionTypes = returnErrors(
        err.response.data.msg,
        err.response.status
      );
      dispatch(returnErrorAction);
    });
};

/**
 * This action will add an item
 * @param item Item passed to the API
 */
export const addItem = (
  item: IItemCreateRequest
): ThunkAction<void, AppState, null, ItemActionTypes | ErrorsActionTypes> => (
  dispatch,
  getState
): void => {
  axios
    .post<Item>(route, item, tokenConfig(getState()))
    .then(response => {
      var addItemAction: ItemActionTypes = {
        type: ADD_ITEM,
        payload: {
          item: response.data
        }
      };
      dispatch(addItemAction);
    })
    .catch(err => {
      var returnErrorAction: ErrorsActionTypes = returnErrors(
        err.response.data.msg,
        err.response.status
      );
      dispatch(returnErrorAction);
    });
};

/**
 * This action will delete an item from the
 * @param id id of the item to delete
 */
export const deleteItem = (
  id: string
): ThunkAction<void, AppState, null, ItemActionTypes | ErrorsActionTypes> => (
  dispatch,
  getState
): void => {
  axios
    .delete(`${route}/${id}`, tokenConfig(getState()))
    .then(response => {
      var deleteItemAction: ItemActionTypes = {
        type: DELETE_ITEM,
        payload: {
          id: id
        }
      };
      dispatch(deleteItemAction);
    })
    .catch(err => {
      var returnErrorAction: ErrorsActionTypes = returnErrors(
        err.response.data.msg,
        err.response.status
      );
      dispatch(returnErrorAction);
    });
};

/**This is an action creator that is trigered whenever the
 * items are loading.
 */
export const setItemsLoading = (): ItemActionTypes => {
  return {
    type: ITEMS_LOADING
  };
};
