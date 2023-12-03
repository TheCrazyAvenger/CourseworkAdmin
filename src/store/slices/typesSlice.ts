import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {TypesStateType} from '../types/types';

const initialState: TypesStateType = {
  classTypes: [],
  partyTypes: [],
};

const typesSlice = createSlice({
  name: Slices.types,
  initialState,
  reducers: {
    setClassTypes: (state, action) => {
      return {
        ...state,
        classTypes: action.payload,
      };
    },
    setPartyTypes: (state, action) => {
      return {
        ...state,
        partyTypes: action.payload,
      };
    },
  },
});

export const {
  actions: {setClassTypes, setPartyTypes},
  reducer: typesReducer,
} = typesSlice;
