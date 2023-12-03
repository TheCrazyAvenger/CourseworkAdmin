import {Typography} from '@/components';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const InstructorItem = ({
  item,
  style,
  deleteInstructor,
  goToAddInstructor,
}: Props) => {
  const goToInstructorEdit = () => {
    goToAddInstructor(item, true);
  };
  const handleDeleteInstructor = () => {
    deleteInstructor(+item.instructor_id);
  };

  return (
    <Card style={[styles.container, style]} onPress={goToInstructorEdit}>
      <Card.Content>
        <Typography variant="headlineMedium">
          {item.first_name} {item.last_name}
        </Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.type}
        </Typography>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleDeleteInstructor}>{'Удалить'}</Button>
        <Button onPress={goToInstructorEdit}>{'Редактировать'}</Button>
      </Card.Actions>
    </Card>
  );
};
