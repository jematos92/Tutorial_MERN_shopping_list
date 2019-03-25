// this where we make requests to backend
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "./types";
import IAction from "../models/iAction";
import IItem from "../models/iItem";

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

export const addItem = (item: IItem): IAction => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
