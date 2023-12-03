import {Typography} from '@/components';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const PartyItem = ({
  item,
  style,
  deleteParty,
  goToAddParty,
  button,
}: Props) => {
  const goToPartyEdit = () => {
    goToAddParty(item, true);
  };
  const handleDeleteParty = () => {
    deleteParty(+item.party_id);
  };

  return (
    <Card style={[styles.container, style]} onPress={goToPartyEdit}>
      <Card.Content>
        <Typography variant="headlineMedium">Занятие</Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.number_of_attendees} участников | {item.entrance_fee} р.
        </Typography>
        <Typography variant="labelMedium">
          {new Date(item.date).toDateString()}
        </Typography>
      </Card.Content>
      {button ? (
        <Card.Actions>{button}</Card.Actions>
      ) : (
        <Card.Actions>
          <Button onPress={handleDeleteParty}>{'Удалить'}</Button>
          <Button onPress={goToPartyEdit}>{'Редактировать'}</Button>
        </Card.Actions>
      )}
    </Card>
  );
};
