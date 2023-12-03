import {IStudents} from '@/store/types';
import React from 'react';
import {FlatList} from 'react-native';
import {StudentItem} from '../StudentItem';
import {Props} from './props';
import {styles} from './styles';

export const RenderStudents = ({
  students,
  disableOrUnlockStudent,
  goToAddStudent,
}: Props) => {
  const keyExtractor = (item: IStudents) => item.student_id.toString();
  const renderItem = ({item}: {item: IStudents}) => (
    <StudentItem
      item={item}
      disableOrUnlockStudent={disableOrUnlockStudent}
      goToAddStudent={goToAddStudent}
    />
  );

  return (
    <FlatList
      data={students}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
    />
  );
};
