import {setPartyTypes} from '@/store/slices';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const purtyTypesApi = createApi({
  reducerPath: 'purtyTypesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.237.13:3000/api/v1',
  }),
  endpoints: build => ({
    getPartyTypes: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: () => ({
        url: '/types&type=party',
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setPartyTypes(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    addPartyType: build.mutation<any, any>({
      query: body => ({
        url: '/types&type=party',
        method: 'POST',
        body,
      }),
    }),
    removePartyType: build.mutation<any, any>({
      query: body => ({
        url: '/types&type=party',
        method: 'DELETE',
        body,
      }),
    }),
  }),
});

export const {
  useGetPartyTypesQuery,
  useAddPartyTypeMutation,
  useRemovePartyTypeMutation,
} = purtyTypesApi;
