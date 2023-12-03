import {
  useAddInstructorMutation,
  useGetInstructorScheduleByIdQuery,
  useGetInstructorsQuery,
  useUpdateInstructorMutation,
} from '@/api';
import {ScreenContainer} from '@/components';
import {InstructorForm} from '@/forms';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';

export const EditInstructorScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();

  const {instructorData, isEdit} = route.params;

  const {
    data: scheduleData,
    isLoading,
    refetch,
  } = useGetInstructorScheduleByIdQuery(instructorData?.instructor_id);
  const [updateInstructor] = useUpdateInstructorMutation({});
  const [addInstructor] = useAddInstructorMutation({});
  const {refetch: refetchInstructors} = useGetInstructorsQuery({});

  if (isLoading) {
    return <></>;
  }
  console.log(instructorData);
  const initialValues = {
    firstName: instructorData?.first_name ? instructorData?.first_name : '',
    lastName: instructorData?.last_name ? instructorData?.last_name : '',
    type: instructorData?.type ? instructorData?.type : '',
    fixedSalary: instructorData?.fixed_salary
      ? (+instructorData?.fixed_salary).toString()
      : '',
    dayOfWeek: scheduleData?.data?.day_of_week
      ? scheduleData?.data?.day_of_week
      : '',
    startTime: scheduleData?.data?.start_time
      ? scheduleData?.data?.start_time
      : '',
    endTime: scheduleData?.data?.end_time ? scheduleData?.data?.end_time : '',
  };

  const onSubmit = async (values: any) => {
    const data = {
      instructorData: {
        first_name: values.firstName,
        last_name: values.lastName,
        type: values.type,
        fixed_salary: +values.fixedSalary,
        day_of_week: values.dayOfWeek,
        start_time: values.startTime,
        end_time: values.endTime,
      },
    };

    if (isEdit) {
      await updateInstructor({
        instructorData: {
          ...data.instructorData,
          instructor_id: instructorData?.instructor_id,
        },
      });
    } else {
      await addInstructor(data);
    }

    await refetchInstructors();

    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <InstructorForm
        initialValues={initialValues}
        isEdit={isEdit}
        onSubmit={onSubmit}
        refetchTypes={refetch}
      />
    </ScreenContainer>
  );
};
