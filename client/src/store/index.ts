// this reducer will bring toger all the reducers
// auth reducer,
// item reducer
// whatever reducers into a single one.

import itemReducer from "./items/reducers";
import errorReducer from "./errors/reducers";
import authReducer from "./auth/reducers";

import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer
});
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
