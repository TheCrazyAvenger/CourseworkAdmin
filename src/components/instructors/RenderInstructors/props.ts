import {IInstructors} from '@/store/types';

export type Props = {
  instructors: IInstructors[];
  deleteInstructor: (instructorId: number) => void;
  goToAddInstructor: (instructorData: IInstructors, isEdit: boolean) => void;
};
