import {IStudents} from '@/store/types';

export type Props = {
  students: IStudents[];
  disableOrUnlockStudent: (studentId: number, disabled: string) => void;
  goToAddStudent: (studentData: IStudents | null, isEdit: boolean) => void;
};
