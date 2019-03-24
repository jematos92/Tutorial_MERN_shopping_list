import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

/**
 * With a plain basic Redux store, you can only do simple synchronous updates 
 * by dispatching an action. Middleware extend the store's abilities, 
 * and let you write async logic that interacts with the store.

 * Thunks are the recommended middleware for basic Redux side effects 
 * logic, including complex synchronous logic that needs access to the store,
 * and simple async logic like AJAX requests.
 */
const middleware = [thunk];

//Reducer, initial state and middleware,
// because we are using redux tools wrap the apply middle ware in the
//compose functions.
var ReuxWebToolsFlag =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    ReuxWebToolsFlag
  )
);

export default store;
