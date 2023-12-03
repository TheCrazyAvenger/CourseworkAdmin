import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {ClassesStateType} from '../types';

const initialState: ClassesStateType = {
  individualClasses: [],
  groupClasses: [],
};

const testsSlice = createSlice({
  name: Slices.classes,
  initialState,
  reducers: {
    setIndividualClasses: (state, action) => {
      return {
        ...state,
        individualClasses: action.payload,
      };
    },
    setGroupClasses: (state, action) => {
      return {
        ...state,
        groupClasses: action.payload,
      };
    },
  },
});

export const {
  actions: {setIndividualClasses, setGroupClasses},
  reducer: classesReducer,
} = testsSlice;
