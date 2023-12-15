import {useDisableOrUnlockStudentMutation, useGetStudentsQuery} from '@/api';
import {FilterMenu, RenderStudents, ScreenContainer} from '@/components';
import {Screens} from '@/constants';
import {selectStudents} from '@/store/selectors/students';
import {IStudents} from '@/store/types';
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
  {title: 'Адрес (по убыванию)', value: ' ORDER BY address DESC'},
  {title: 'Адрес (по возрастанию)', value: ' ORDER BY address ASC'},
  {title: 'Телефон (по убыванию)', value: ' ORDER BY phone_number DESC'},
  {title: 'Телефон (по возрастанию)', value: ' ORDER BY phone_number ASC'},
];

const filterValues = [
  {title: 'Имя', value: ' WHERE first_name = '},
  {title: 'Фамилия', value: ' WHERE last_name = '},
  {title: 'Адрес', value: ' WHERE address = '},
  {title: 'Телефон', value: ' WHERE phone_number = '},
];

export const StudentsScreen = () => {
  const navigation = useNavigation<any>();

  const [selectedSortType, setSelectedSortType] = useState<any>(sortValues[0]);
  const [selectedFilterType, setSelectedFilterType] = useState<any>(
    filterValues[0],
  );
  const [filtetText, setFilterText] = useState('');

  const {isLoading, refetch} = useGetStudentsQuery({
    sort:
      (selectedFilterType?.value && filtetText.length > 0
        ? selectedFilterType.value + `'${filtetText}'`
        : '') + selectedSortType?.value,
  });

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
      <RenderStudents
        students={students}
        disableOrUnlockStudent={handleDisableOrUnlockStudent}
        goToAddStudent={goToAddStudent}
      />
    </ScreenContainer>
  );
};
