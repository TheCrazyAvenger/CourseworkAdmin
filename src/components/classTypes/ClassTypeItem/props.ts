import {IClassType} from '@/store/types';

export type Props = {
  item: IClassType;
  selectItem: (type: string) => void;
  removeClassType: (typeName: number) => void;
};
