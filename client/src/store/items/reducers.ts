// Reducer is where the actual state is going to go,
// this where we check our actions.
// This is where we check our actions. (get Items, add Items)
// it will dispatch to our recuder. and can have payload
// Server to reducer communication.

import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  ITEMS_LOADING,
  ItemActionTypes,
  itemsState
} from "./types";

const initialStatetate: itemsState = {
  items: [],
  loading: false
};

//** A function that takes the inital state an action to perform and returns the new state */
var itemReducer = function(
  state = initialStatetate,
  action: ItemActionTypes
): itemsState {
  switch (action.type) {
    case GET_ITEMS:
      var newState: itemsState = {
        ...state,
        items: action.payload,
        loading: false //Reset loading indicator
      };
      return newState;
    case DELETE_ITEM:
      var newState: itemsState = {
        ...state,
        items: state.items.filter(x => x._id !== action.payload.id)
      };
      return newState;
    case ADD_ITEM:
      var newState: itemsState = {
        ...state,
        items: [action.payload.item, ...state.items]
      };
      return newState;
    case ITEMS_LOADING:
      var newState: itemsState = {
        ...state,
        loading: true
      };
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
