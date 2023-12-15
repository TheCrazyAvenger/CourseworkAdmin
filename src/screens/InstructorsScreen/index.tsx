import {useDeleteInstructorMutation, useGetInstructorsQuery} from '@/api';
import {
  FAB,
  FilterMenu,
  RenderInstructors,
  ScreenContainer,
} from '@/components';
import {Screens} from '@/constants';
import {selectInstructors} from '@/store/selectors';
import {IInstructors} from '@/store/types';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const sortValues = [
  {title: 'Имя (по убыванию)', value: ' ORDER BY first_name DESC'},
  {title: 'Имя (по возрастанию)', value: ' ORDER BY first_name ASC'},
  {
    title: 'Фамилия (по убыванию)',
    value: ' ORDER BY last_name DESC',
  },
  {
    title: 'Фамилия (по возрастанию)',
    value: ' ORDER BY last_name ASC',
  },
  {title: 'Зарплата (по убыванию)', value: ' ORDER BY fixed_salary DESC'},
  {title: 'Зарплата (по возрастанию)', value: ' ORDER BY fixed_salary ASC'},
  {title: 'Тип (по убыванию)', value: ' ORDER BY type DESC'},
  {title: 'Тип (по возрастанию)', value: ' ORDER BY type ASC'},
];

const filterValues = [
  {title: 'Имя', value: ' WHERE first_name = '},
  {title: 'Фамилия', value: ' WHERE last_name = '},
  {title: 'Зарплата', value: ' WHERE fixed_salary = '},
  {title: 'Тип', value: ' WHERE type = '},
];

export const InstructorsScreen = () => {
  const navigation = useNavigation<any>();

  const [selectedSortType, setSelectedSortType] = useState<any>(sortValues[0]);
  const [selectedFilterType, setSelectedFilterType] = useState<any>(
    filterValues[0],
  );
  const [filtetText, setFilterText] = useState('');

  const {isLoading: instructorsLoading, refetch: refetchInstructors} =
    useGetInstructorsQuery({
      sort:
        (selectedFilterType?.value && filtetText.length > 0
          ? selectedFilterType.value + `'${filtetText}'`
          : '') + selectedSortType?.value,
    });

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
      <RenderInstructors
        instructors={instructors}
        deleteInstructor={handleDeleteInstructor}
        goToAddInstructor={goToAddInstructor}
      />
      <FAB onPress={() => goToAddInstructor(null, false)} />
    </ScreenContainer>
  );
};
