import {
  useDeletClassMutation,
  useGetGroupClassesQuery,
  useGetIndividualClassesQuery,
} from '@/api';
import {ClassesMenu, FAB, RenderClass, ScreenContainer} from '@/components';
import {Screens} from '@/constants';
import {selectGroupClasses, selectIndividualClasses} from '@/store/selectors';
import {IIndividualClasses} from '@/store/types';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

export const ClassesScreen = () => {
  const navigation = useNavigation<any>();

  const {isLoading: individualClassesLoading, refetch: refetchIndividual} =
    useGetIndividualClassesQuery({});
  const {isLoading: groupClassesLoading, refetch: refetchGroup} =
    useGetGroupClassesQuery({});
  const [deleteClass] = useDeletClassMutation({});

  const individualClasses = useSelector(selectIndividualClasses);
  const groupClasses = useSelector(selectGroupClasses);

  const [selectedClass, setSelectedClass] = useState('individual');
  const classes =
    selectedClass === 'individual' ? individualClasses : groupClasses;

  const handleDeleteClass = async (classId: number) => {
    await deleteClass({classId, type: selectedClass});
    if (selectedClass === 'individual') {
      await refetchIndividual();
    } else {
      await refetchGroup();
    }
  };

  const goToAddClass = (
    classData: IIndividualClasses | null,
    isEdit: boolean,
  ) => {
    navigation.navigate(Screens.editClass, {classData, isEdit, selectedClass});
  };

  if (individualClassesLoading || groupClassesLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <ClassesMenu value={selectedClass} setValue={setSelectedClass} />
      <RenderClass
        classes={classes}
        deleteClass={handleDeleteClass}
        goToAddClass={goToAddClass}
      />
      <FAB onPress={() => goToAddClass(null, false)} />
    </ScreenContainer>
  );
};
