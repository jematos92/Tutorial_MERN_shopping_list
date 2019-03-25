import IItem from "../models/iItem";
//**Common interface for item actions.  */
export default interface IAction {
  type: string;
  payload: string | IItem | null;
}
