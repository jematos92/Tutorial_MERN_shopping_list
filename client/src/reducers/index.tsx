// this reducer will bring toger all the reducers
// auth reducer,
// item reducer
// whatever reducers into a single one.

import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import ICombinedReducer from "../models/iCombinedReducer";

var combinedReducerObject: ICombinedReducer = {
  item: itemReducer
};
export default combineReducers(combinedReducerObject);
