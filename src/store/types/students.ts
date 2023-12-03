export type StudentsStateType = {
  students: IStudents[];
};

export interface IStudents {
  student_id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: string;
  type: string;
  date_of_birth: string;
  disabled: string | null;
}
