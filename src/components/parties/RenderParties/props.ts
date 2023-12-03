import {IParties} from '@/store/types';

export type Props = {
  parties: IParties[];
  deleteParty: (partyId: number) => void;
  goToAddParty: (partyData: IParties, isEdit: boolean) => void;
};
