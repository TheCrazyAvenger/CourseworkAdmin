export type InstructorsStateType = {
  instructors: IInstructors[];
};

export interface IInstructors {
  instructor_id: number;
  first_name: string;
  last_name: string;
  type: string;
  fixed_salary: number;
}
