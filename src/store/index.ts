import {
  classesApi,
  instructorsApi,
  purtyTypesApi,
  studentsApi,
  userApi,
} from '@/api';
import {classTypesApi} from '@/api/classTypes';
import {partiesApi} from '@/api/parties';
import {Slices} from '@/constants';
import {
  classesReducer,
  partiesReducer,
  studentsReducer,
  typesReducer,
  userReducer,
} from '@/store/slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {instructorsReducer} from './slices/instructorsSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const userPersistConfig = {
  key: Slices.user,
  storage: AsyncStorage,
  whitelist: ['token'],
};

const reducers = combineReducers({
  [studentsApi.reducerPath]: studentsApi.reducer,
  [classesApi.reducerPath]: classesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [classTypesApi.reducerPath]: classTypesApi.reducer,
  [purtyTypesApi.reducerPath]: purtyTypesApi.reducer,
  [partiesApi.reducerPath]: partiesApi.reducer,
  [instructorsApi.reducerPath]: instructorsApi.reducer,
  [Slices.classes]: classesReducer,
  [Slices.types]: typesReducer,
  [Slices.parties]: partiesReducer,
  [Slices.instructors]: instructorsReducer,
  [Slices.students]: studentsReducer,
  [Slices.user]: persistReducer(userPersistConfig, userReducer),
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([
      classesApi.middleware,
      userApi.middleware,
      classTypesApi.middleware,
      partiesApi.middleware,
      purtyTypesApi.middleware,
      instructorsApi.middleware,
      studentsApi.middleware,
    ]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
