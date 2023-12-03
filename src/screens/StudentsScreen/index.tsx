import {useDisableOrUnlockStudentMutation, useGetStudentsQuery} from '@/api';
import {RenderStudents, ScreenContainer} from '@/components';
import {Screens} from '@/constants';
import {selectStudents} from '@/store/selectors/students';
import {IStudents} from '@/store/types';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

export const StudentsScreen = () => {
  const navigation = useNavigation<any>();

  const {isLoading, refetch} = useGetStudentsQuery({});

  const [disableOrUnlockStudent] = useDisableOrUnlockStudentMutation({});

  const students = useSelector(selectStudents);

  const handleDisableOrUnlockStudent = async (
    studentId: number,
    disabled: string,
  ) => {
    await disableOrUnlockStudent({studentId, disabled});
    refetch();
  };

  const goToAddStudent = (studentData: IStudents | null, isEdit: boolean) => {
    navigation.navigate(Screens.editStudent, {studentData, isEdit});
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <RenderStudents
        students={students}
        disableOrUnlockStudent={handleDisableOrUnlockStudent}
        goToAddStudent={goToAddStudent}
      />
    </ScreenContainer>
  );
};
