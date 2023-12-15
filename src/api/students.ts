import {setStudents} from '@/store/slices';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.237.13:3000/api/v1',
  }),
  endpoints: build => ({
    getStudents: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: ({sort}) => ({
        url: `/students${sort ? `s/${sort}` : ''}`,
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setStudents(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    updateStudents: build.mutation<any, any>({
      query: body => ({
        url: '/students',
        method: 'PATCH',
        body,
      }),
    }),
    disableOrUnlockStudent: build.mutation<any, any>({
      query: body => ({
        url: '/students&type=access',
        method: 'PATCH',
        body,
      }),
    }),
    getStudentClasses: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: studentId => ({
        url: '/student-schedule&type=classes/' + studentId,
        method: 'GET',
      }),
    }),
    removeStudentSchedule: build.mutation<any, any>({
      query: body => ({
        url: '/student-schedule&type=classes',
        method: 'DELETE',
        body,
      }),
    }),
    getStudentParties: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: studentId => ({
        url: '/student-schedule&type=parties/' + studentId,
        method: 'GET',
      }),
    }),
    removeStudentParticipant: build.mutation<any, any>({
      query: body => ({
        url: '/student-schedule&type=parties/',
        method: 'DELETE',
        body,
      }),
    }),
  }),
});

export const {
  useDisableOrUnlockStudentMutation,
  useGetStudentsQuery,
  useUpdateStudentsMutation,
  useGetStudentClassesQuery,
  useRemoveStudentScheduleMutation,
  useGetStudentPartiesQuery,
  useRemoveStudentParticipantMutation,
} = studentsApi;
