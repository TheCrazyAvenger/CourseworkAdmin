export type TypesStateType = {
  classTypes: IClassType[];
  partyTypes: IClassType[];
};

export interface IClassType {
  type_name: string;
  type_id: number;
}
