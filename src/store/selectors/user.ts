import {Slices} from '@/constants';
import {StoreType} from '../types';

export const selectToken = (state: StoreType) => state[Slices.user].token;
