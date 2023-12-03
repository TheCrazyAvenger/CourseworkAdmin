import {Slices} from '@/constants';
import {StoreType} from '../types';

export const selectIndividualClasses = (state: StoreType) =>
  state[Slices.classes].individualClasses;
export const selectGroupClasses = (state: StoreType) =>
  state[Slices.classes].groupClasses;
