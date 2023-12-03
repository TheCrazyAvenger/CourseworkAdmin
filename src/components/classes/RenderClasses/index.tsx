import {IIndividualClasses} from '@/store/types';
import React from 'react';
import {FlatList} from 'react-native';
import {ClassItem} from '../ClassItem';
import {Props} from './props';
import {styles} from './styles';

export const RenderClass = ({classes, deleteClass, goToAddClass}: Props) => {
  const keyExtractor = (item: IIndividualClasses) => item.class_id.toString();
  const renderItem = ({item}: {item: IIndividualClasses}) => (
    <ClassItem
      item={item}
      deleteClass={deleteClass}
      goToAddClass={goToAddClass}
    />
  );

  return (
    <FlatList
      data={classes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
    />
  );
};
