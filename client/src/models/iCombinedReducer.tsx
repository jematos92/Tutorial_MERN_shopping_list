import IState from "./iState";
import IAction from "./iAction";

/**Common interface for the global reducer that combines
 * all the reducers into a single object.
 */
export default interface ICombinedReducer {
  item: (state: IState | undefined, action: IAction) => IState;
}
