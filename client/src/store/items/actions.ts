// this where we make requests to backend
import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  ITEMS_LOADING,
  ItemActionTypes
} from "./types";
import Item, { IItemCreateRequest } from "../../models/iItem";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { AppState } from "../../store";

export const getItems = (): ThunkAction<
  any, //Return type
  AppState, //state Type
  null, //Extra argument
  ItemActionTypes //Action Type
> => async (dispatch, getstate, extra) => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(response => {
    var getItemsActions: ItemActionTypes = {
      type: GET_ITEMS,
      payload: response.data
    };
    dispatch(getItemsActions);
  });
};

export const addItem = (
  item: IItemCreateRequest
): ThunkAction<
  any, //Return type
  AppState, //state Type
  null, //Extra argument
  ItemActionTypes //Action Type
> => async (dispatch, getstate, extra) => {
  axios.post("/api/items", item).then(response => {
    var addItemAction: ItemActionTypes = {
      type: ADD_ITEM,
      payload: {
        item: response.data as Item
      }
    };
    dispatch(addItemAction);
  });
};

export const deleteItem = (
  id: string
): ThunkAction<
  any, //Return type
  AppState, //state Type
  null, //Extra argument
  ItemActionTypes //Action Type
> => async (dispatch, getstate, extra) => {
  axios.delete(`/api/items/${id}`).then(response => {
    var deleteItemAction: ItemActionTypes = {
      type: DELETE_ITEM,
      payload: {
        id: id
      }
    };
    dispatch(deleteItemAction);
  });
};

export const setItemsLoading = (): ItemActionTypes => {
  return {
    type: ITEMS_LOADING
  };
};
