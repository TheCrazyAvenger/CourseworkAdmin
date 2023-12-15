import {setParties} from '@/store/slices/partiesSlice';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const partiesApi = createApi({
  reducerPath: 'partiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.237.13:3000/api/v1',
  }),
  endpoints: build => ({
    getParties: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: ({sort}) => ({
        url: `/parties${sort ? `s/${sort}` : ''}`,
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setParties(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    addParty: build.mutation<any, any>({
      query: body => ({
        url: '/parties',
        method: 'POST',
        body,
      }),
    }),
    deletParty: build.mutation<any, any>({
      query: body => ({
        url: '/parties',
        method: 'DELETE',
        body,
      }),
    }),
    updateParty: build.mutation<any, any>({
      query: body => ({
        url: '/parties',
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const {
  useGetPartiesQuery,
  useAddPartyMutation,
  useDeletPartyMutation,
  useUpdatePartyMutation,
} = partiesApi;
