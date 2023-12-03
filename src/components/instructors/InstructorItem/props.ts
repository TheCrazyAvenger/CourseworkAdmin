import {IInstructors} from '@/store/types';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  item: IInstructors;
  style?: StyleProp<ViewStyle>;
  deleteInstructor: (instructorId: number) => void;
  goToAddInstructor: (instructorData: IInstructors, isEdit: boolean) => void;
};
