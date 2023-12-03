import {IParties} from '@/store/types';
import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  item: IParties;
  style?: StyleProp<ViewStyle>;
  deleteParty?: (partyId: number) => void;
  goToAddParty?: (partyData: IParties, isEdit: boolean) => void;
  button?: ReactNode;
};
