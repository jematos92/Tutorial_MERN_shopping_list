import IItem from "../../models/Item";
export const GET_ITEMS = "GET_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ITEMS_LOADING = "ITEMS_LOADING";

interface setItemsLoadingAction {
  type: typeof ITEMS_LOADING;
}

interface getItemsAction {
  type: typeof GET_ITEMS;
  payload: IItem[];
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: {
    id: string;
  };
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: {
    item: IItem;
  };
}
export interface itemsState {
  items: IItem[];
  loading: boolean;
}

export type ItemActionTypes =
  | getItemsAction
  | DeleteItemAction
  | AddItemAction
  | setItemsLoadingAction;
