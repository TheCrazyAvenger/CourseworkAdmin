import {Slices} from '@/constants';
import {StoreType} from '../types';

export const selectStudents = (state: StoreType) =>
  state[Slices.students].students;
