export type PartiesStateType = {
  parties: IParties[];
};

export interface IParties {
  party_id: number;
  date: string;
  type_id: string;
  number_of_attendees: number;
  entrance_fee: number;
}
