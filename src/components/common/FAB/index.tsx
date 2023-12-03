import React from 'react';
import {AnimatedFAB} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const FAB = ({onPress}: Props) => {
  return (
    <AnimatedFAB
      icon={'plus'}
      label=""
      extended={false}
      onPress={onPress}
      animateFrom={'right'}
      iconMode={'static'}
      style={[styles.fabStyle]}
    />
  );
};
