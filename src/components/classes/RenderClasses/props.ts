import {IIndividualClasses} from '@/store/types';

export type Props = {
  classes: IIndividualClasses[];
  deleteClass: (classId: number) => void;
  goToAddClass: (classData: IIndividualClasses, isEdit: boolean) => void;
};
