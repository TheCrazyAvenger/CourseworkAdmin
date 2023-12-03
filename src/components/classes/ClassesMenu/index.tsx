import {classMenu} from '@/mocks';
import React from 'react';
import {SegmentedButtons} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const ClassesMenu = ({value, setValue}: Props) => {
  return (
    <SegmentedButtons
      style={styles.container}
      value={value}
      onValueChange={setValue}
      buttons={classMenu}
    />
  );
};
