import {IStudents} from '@/store/types';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  item: IStudents;
  style?: StyleProp<ViewStyle>;
  disableOrUnlockStudent: (studentId: number, disabled: string) => void;
  goToAddStudent: (studentData: IStudents, isEdit: boolean) => void;
};
