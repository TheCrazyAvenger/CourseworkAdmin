import {IParties} from '@/store/types';
import React from 'react';
import {FlatList} from 'react-native';
import {PartyItem} from '../PartyItem';
import {Props} from './props';
import {styles} from './styles';

export const RenderParties = ({parties, deleteParty, goToAddParty}: Props) => {
  const keyExtractor = (item: IParties) => item.party_id.toString();
  const renderItem = ({item}: {item: IParties}) => (
    <PartyItem
      item={item}
      deleteParty={deleteParty}
      goToAddParty={goToAddParty}
    />
  );

  return (
    <FlatList
      data={parties}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
    />
  );
};
