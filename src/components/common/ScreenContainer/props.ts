import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};
