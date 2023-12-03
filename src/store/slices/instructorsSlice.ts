import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {InstructorsStateType} from '../types';

const initialState: InstructorsStateType = {
  instructors: [],
};

const instructorsSlice = createSlice({
  name: Slices.instructors,
  initialState,
  reducers: {
    setInstructors: (state, action) => {
      return {
        ...state,
        instructors: action.payload,
      };
    },
  },
});

export const {
  actions: {setInstructors},
  reducer: instructorsReducer,
} = instructorsSlice;
