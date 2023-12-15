import {setInstructors} from '@/store/slices/instructorsSlice';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const instructorsApi = createApi({
  reducerPath: 'instructorsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.237.13:3000/api/v1',
  }),
  endpoints: build => ({
    getInstructors: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: ({sort}) => ({
        url: `/instructors${sort ? `s/${sort}` : ''}`,
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setInstructors(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getInstructorScheduleById: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: id => ({
        url: '/instructors-schedule/' + id,
        method: 'GET',
      }),
    }),
    addInstructor: build.mutation<any, any>({
      query: body => ({
        url: '/instructors',
        method: 'POST',
        body,
      }),
    }),
    deleteInstructor: build.mutation<any, any>({
      query: body => ({
        url: '/instructors',
        method: 'DELETE',
        body,
      }),
    }),
    updateInstructor: build.mutation<any, any>({
      query: body => ({
        url: '/instructors',
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const {
  useGetInstructorsQuery,
  useUpdateInstructorMutation,
  useAddInstructorMutation,
  useDeleteInstructorMutation,
  useGetInstructorScheduleByIdQuery,
} = instructorsApi;
