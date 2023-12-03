import React from 'react';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from './props';
import {styles} from './styles';

export const ScreenContainer = ({children, style}: Props) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}, style]}>
      {children}
    </SafeAreaView>
  );
};
