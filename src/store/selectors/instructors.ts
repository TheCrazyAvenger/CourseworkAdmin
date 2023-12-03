import {Slices} from '@/constants';
import {StoreType} from '../types';

export const selectInstructors = (state: StoreType) =>
  state[Slices.instructors].instructors;
