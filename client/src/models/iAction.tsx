//**Common interface for item actions.  */
export default interface IAction {
  type: string;
  payload: string | null;
}