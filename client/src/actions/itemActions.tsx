// this where we make requests to backend
import { ADD_ITEMS, DELETE_ITEMS, GET_ITEMS } from "./types";
import IAction from "../models/iAction";

export const getItems = (): IAction => {
  return {
    type: GET_ITEMS
  };
};
