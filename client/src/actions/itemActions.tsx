// this where we make requests to backend
import { ADD_ITEMS, DELETE_ITEM, GET_ITEMS } from "./types";
import IAction from "../models/iAction";

export const getItems = (): IAction => {
  return {
    type: GET_ITEMS,
    payload: null
  };
};

export const deleteItem = (id: string): IAction => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
