// this where we make requests to backend
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ItemActionTypes } from "./types";
import IItem from "../../models/iItem";

export const getItems = (): ItemActionTypes => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = (id: string): ItemActionTypes => {
  return {
    type: DELETE_ITEM,
    payload: {
      id: id
    }
  };
};

export const addItem = (item: IItem): ItemActionTypes => {
  return {
    type: ADD_ITEM,
    payload: {
      item: item
    }
  };
};
