import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {PartiesStateType} from '../types';

const initialState: PartiesStateType = {
  parties: [],
};

const partiesSlice = createSlice({
  name: Slices.parties,
  initialState,
  reducers: {
    setParties: (state, action) => {
      return {
        ...state,
        parties: action.payload,
      };
    },
  },
});

export const {
  actions: {setParties},
  reducer: partiesReducer,
} = partiesSlice;
