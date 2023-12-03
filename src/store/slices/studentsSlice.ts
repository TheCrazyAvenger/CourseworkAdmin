import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {StudentsStateType} from '../types';

const initialState: StudentsStateType = {
  students: [],
};

const studentsSlice = createSlice({
  name: Slices.students,
  initialState,
  reducers: {
    setStudents: (state, action) => {
      return {
        ...state,
        students: action.payload,
      };
    },
  },
});

export const {
  actions: {setStudents},
  reducer: studentsReducer,
} = studentsSlice;
