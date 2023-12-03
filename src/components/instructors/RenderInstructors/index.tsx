import {IInstructors} from '@/store/types';
import React from 'react';
import {FlatList} from 'react-native';
import {InstructorItem} from '../InstructorItem';
import {Props} from './props';
import {styles} from './styles';

export const RenderInstructors = ({
  instructors,
  deleteInstructor,
  goToAddInstructor,
}: Props) => {
  const keyExtractor = (item: IInstructors) => item.instructor_id.toString();
  const renderItem = ({item}: {item: IInstructors}) => (
    <InstructorItem
      item={item}
      deleteInstructor={deleteInstructor}
      goToAddInstructor={goToAddInstructor}
    />
  );

  return (
    <FlatList
      data={instructors}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
    />
  );
};
