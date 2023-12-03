export type ClassesStateType = {
  individualClasses: IIndividualClasses[];
  groupClasses: IGroupClasses[];
};

export interface IIndividualClasses {
  class_id: number;
  class_name: string;
  day_of_week: string;
  end_time: string;
  start_time: string;
  type_id: number;
}

export interface IGroupClasses {
  class_id: number;
  class_name: string;
  day_of_week: string;
  end_time: string;
  start_time: string;
  type_id: number;
}
