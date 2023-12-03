import {useDeleteInstructorMutation, useGetInstructorsQuery} from '@/api';
import {FAB, RenderInstructors, ScreenContainer} from '@/components';
import {Screens} from '@/constants';
import {selectInstructors} from '@/store/selectors';
import {IInstructors} from '@/store/types';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

export const InstructorsScreen = () => {
  const navigation = useNavigation<any>();

  const {isLoading: instructorsLoading, refetch: refetchInstructors} =
    useGetInstructorsQuery({});

  const [deleteInstructor] = useDeleteInstructorMutation({});

  const instructors = useSelector(selectInstructors);

  const handleDeleteInstructor = async (instructorId: number) => {
    await deleteInstructor({instructorId});
    refetchInstructors();
  };

  const goToAddInstructor = (
    instructorData: IInstructors | null,
    isEdit: boolean,
  ) => {
    navigation.navigate(Screens.editInstructor, {instructorData, isEdit});
  };

  if (instructorsLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <RenderInstructors
        instructors={instructors}
        deleteInstructor={handleDeleteInstructor}
        goToAddInstructor={goToAddInstructor}
      />
      <FAB onPress={() => goToAddInstructor(null, false)} />
    </ScreenContainer>
  );
};
