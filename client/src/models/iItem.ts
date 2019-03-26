/**The model of the items.  */
export default interface IItem {
  _id: string;
  name: string;
}

export interface IItemCreateRequest {
  name: string;
}
