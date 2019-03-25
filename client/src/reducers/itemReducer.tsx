// Reducer is where the actual state is going to go,
// this where we check our actions.
// This is where we check our actions. (get Items, add Items)
// it will dispatch to our recuder. and can have payload
// Server to reducer communication.

import { v4 as uuid } from "uuid";
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "../actions/types";
import IAction from "../models/iAction";
import IState from "../models/iState";
import IItem from "../models/iItem";

const initialStatetate: IState = {
  items: [
    {
      id: uuid(),
      name: "item1"
    },
    {
      id: uuid(),
      name: "item2"
    },
    {
      id: uuid(),
      name: "item3"
    },
    {
      id: uuid(),
      name: "item4"
    },
    {
      id: uuid(),
      name: "item5"
    },
    {
      id: uuid(),
      name: "item6"
    }
  ]
};

//** A function that takes the inital state an action to perform and returns the new state */
var itemReducer = function(state = initialStatetate, action: IAction) {
  switch (action.type) {
    case GET_ITEMS:
      var newState: IState = {
        ...state
      };
      return newState;
    case DELETE_ITEM:
      var newState: IState = {
        ...state,
        items: state.items.filter(x => x.id !== action.payload)
      };
      return newState;
    case ADD_ITEM:
      var newState: IState = {
        ...state,
        items: [action.payload as IItem, ...state.items]
      };
      return newState;
    default:
      return state;
  }
};
export default itemReducer;
