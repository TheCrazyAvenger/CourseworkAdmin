import {Typography} from '@/components';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const ClassItem = ({
  item,
  style,
  deleteClass,
  goToAddClass,
  button,
}: Props) => {
  const goToClassEdit = () => {
    goToAddClass && goToAddClass(item, true);
  };
  const handleDeleteClass = () => {
    deleteClass && deleteClass(+item.class_id);
  };

  return (
    <Card style={[styles.container, style]} onPress={goToClassEdit}>
      <Card.Content>
        <Typography variant="headlineMedium">{item.class_name}</Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.type_id} | {item.day_of_week}
        </Typography>
        <Typography variant="labelMedium">
          {item.start_time} - {item.end_time}
        </Typography>
      </Card.Content>

      {button ? (
        <Card.Actions>{button}</Card.Actions>
      ) : (
        <Card.Actions>
          <Button onPress={handleDeleteClass}>{'Удалить'}</Button>
          <Button onPress={goToClassEdit}>{'Редактировать'}</Button>
        </Card.Actions>
      )}
    </Card>
  );
};
