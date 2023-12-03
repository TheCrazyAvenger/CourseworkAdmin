import {VariantProp} from 'react-native-paper/lib/typescript/components/Typography/types';

export type Props = {
  title: string;
  pv: number;
  description?: string;
  textAlign?: 'center' | 'right' | 'left';
  variant?: VariantProp<never>;
};
