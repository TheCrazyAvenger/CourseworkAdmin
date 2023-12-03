import {setClassTypes} from '@/store/slices';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const classTypesApi = createApi({
  reducerPath: 'classTypesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.2.2:3000/api/v1',
  }),
  endpoints: build => ({
    getClassTypes: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: () => ({
        url: '/types&type=class',
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setClassTypes(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    addClassType: build.mutation<any, any>({
      query: body => ({
        url: '/types&type=class',
        method: 'POST',
        body,
      }),
    }),
    removeClassType: build.mutation<any, any>({
      query: body => ({
        url: '/types&type=class',
        method: 'DELETE',
        body,
      }),
    }),
  }),
});

export const {
  useGetClassTypesQuery,
  useAddClassTypeMutation,
  useRemoveClassTypeMutation,
} = classTypesApi;
