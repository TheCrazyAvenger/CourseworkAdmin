import {useGetStudentsQuery, useUpdateStudentsMutation} from '@/api';
import {ScreenContainer} from '@/components';
import {StudentForm} from '@/forms';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';

export const EditStudentScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();

  const {studentData, isEdit} = route.params;

  const [updateStudent] = useUpdateStudentsMutation({});
  const {refetch} = useGetStudentsQuery({});

  const initialValues = {
    firstName: studentData?.first_name ? studentData?.first_name : '',
    lastName: studentData?.last_name ? studentData?.last_name : '',
    address: studentData?.address ? studentData?.address : '',
    dateOfBirth: studentData?.date_of_birth
      ? new Date(studentData?.date_of_birth)
      : new Date(),
  };

  const onSubmit = async (values: any) => {
    const data = {
      studentData: {
        first_name: values.firstName,
        last_name: values.lastName,
        address: values.address,
        date_of_birth: values.dateOfBirth,
      },
    };

    await updateStudent({
      studentData: {
        ...data.studentData,
        student_id: studentData?.student_id,
      },
    });

    await refetch();

    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <StudentForm
        initialValues={initialValues}
        isEdit={isEdit}
        onSubmit={onSubmit}
        refetchTypes={refetch}
        studentId={studentData.student_id}
      />
    </ScreenContainer>
  );
};
