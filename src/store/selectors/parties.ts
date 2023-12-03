import {Slices} from '@/constants';
import {StoreType} from '../types';

export const selectParties = (state: StoreType) =>
  state[Slices.parties].parties;
