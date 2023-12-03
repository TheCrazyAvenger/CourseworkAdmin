import {IGroupClasses, IIndividualClasses} from '@/store/types';
import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  item: IIndividualClasses | IGroupClasses;
  style?: StyleProp<ViewStyle>;
  deleteClass?: (classId: number) => void;
  goToAddClass?: (classData: IIndividualClasses, isEdit: boolean) => void;
  button?: ReactNode;
};
