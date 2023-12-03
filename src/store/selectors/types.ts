import {Slices} from '@/constants';
import {StoreType} from '../types';

export const selectClassTypes = (state: StoreType) =>
  state[Slices.types].classTypes;
export const selectPartyTypes = (state: StoreType) =>
  state[Slices.types].partyTypes;
