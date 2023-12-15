import {
  useDeletClassMutation,
  useGetGroupClassesQuery,
  useGetIndividualClassesQuery,
} from '@/api';
import {
  ClassesMenu,
  FAB,
  FilterMenu,
  RenderClass,
  ScreenContainer,
} from '@/components';
import {Screens} from '@/constants';
import {selectGroupClasses, selectIndividualClasses} from '@/store/selectors';
import {IIndividualClasses} from '@/store/types';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const sortValues = [
  {title: 'Название (по убыванию)', value: ' ORDER BY class_name DESC'},
  {title: 'Название (по возрастанию)', value: ' ORDER BY class_name ASC'},
  {title: 'Время начала (по убыванию)', value: ' ORDER BY start_time DESC'},
  {title: 'Время начала (по возрастанию)', value: ' ORDER BY start_time ASC'},
  {title: 'Время окончания (по убыванию)', value: ' ORDER BY end_time DESC'},
  {title: 'Время окончания (по возрастанию)', value: ' ORDER BY end_time ASC'},
];

const filterValues = [
  {title: 'Название', value: ' AND class_name = '},
  {title: 'Время начала', value: ' AND start_time = '},
  {title: 'Время окончания', value: ' AND end_time = '},
];

export const ClassesScreen = () => {
  const navigation = useNavigation<any>();

  const [selectedSortType, setSelectedSortType] = useState<any>(sortValues[0]);
  const [selectedFilterType, setSelectedFilterType] = useState<any>(
    filterValues[0],
  );
  const [filtetText, setFilterText] = useState('');

  const {isLoading: individualClassesLoading, refetch: refetchIndividual} =
    useGetIndividualClassesQuery({
      sort:
        (selectedFilterType?.value && filtetText.length > 0
          ? selectedFilterType.value + `'${filtetText}'`
          : '') + selectedSortType?.value,
    });
  const {isLoading: groupClassesLoading, refetch: refetchGroup} =
    useGetGroupClassesQuery({
      sort:
        (selectedFilterType?.value && filtetText.length > 0
          ? selectedFilterType.value + `'${filtetText}'`
          : '') + selectedSortType?.value,
    });
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
      <FilterMenu
        setSort={setSelectedSortType}
        sortData={sortValues}
        sortValue={selectedSortType}
        filterData={filterValues}
        filterValue={selectedFilterType}
        setFilter={setSelectedFilterType}
        filterText={filtetText}
        setFilterText={setFilterText}
      />
      <RenderClass
        classes={classes}
        deleteClass={handleDeleteClass}
        goToAddClass={goToAddClass}
      />
      <FAB onPress={() => goToAddClass(null, false)} />
    </ScreenContainer>
  );
};
