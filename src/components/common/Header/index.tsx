import {Typography} from '@/components';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const Header = ({
  title,
  description,
  pv,
  textAlign = 'left',
  variant = 'headlineMedium',
}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.primary, paddingVertical: pv},
      ]}>
      <Typography
        textAlign={textAlign}
        variant={variant}
        color={colors.onPrimary}>
        {title}
      </Typography>
      {description ? (
        <Typography variant="headlineMedium" color={colors.onPrimary}>
          {description}
        </Typography>
      ) : (
        <></>
      )}
    </View>
  );
};
