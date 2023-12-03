import {Typography} from '@/components';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const StudentItem = ({
  item,
  style,
  disableOrUnlockStudent,
  goToAddStudent,
}: Props) => {
  const buttonText =
    item?.disabled === 'disabled' ? 'Разблокировать' : 'Заблокировать';

  const goToStudentEdit = () => {
    goToAddStudent(item, true);
  };
  const handleDisableParty = () => {
    disableOrUnlockStudent(
      +item.student_id,
      item?.disabled === 'disabled' ? 'unlocked' : 'disabled',
    );
  };

  return (
    <Card style={[styles.container, style]} onPress={goToStudentEdit}>
      <Card.Content>
        <Typography variant="headlineMedium">
          {item.first_name} {item.last_name}
        </Typography>
        <Typography variant="bodyLarge" mb={6}>
          {new Date(item.date_of_birth).toDateString()}
        </Typography>
        <Typography variant="labelMedium" mt={-5}>
          {item.address}
        </Typography>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={handleDisableParty}
          mode={item?.disabled === 'disabled' ? 'contained-tonal' : 'outlined'}>
          {buttonText}
        </Button>
        <Button onPress={goToStudentEdit}>{'Редактировать'}</Button>
      </Card.Actions>
    </Card>
  );
};
