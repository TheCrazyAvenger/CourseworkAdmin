import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {UserStateType} from '../types/user';

const initialState: UserStateType = {
  token: null,
};

const userSlice = createSlice({
  name: Slices.user,
  initialState,
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const {
  actions: {setToken},
  reducer: userReducer,
} = userSlice;
