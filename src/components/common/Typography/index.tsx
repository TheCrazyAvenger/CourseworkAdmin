import {getOffset} from '@/helpers';
import React from 'react';
import {Text, useTheme} from 'react-native-paper';
import {Props} from './props';

export const Typography = ({
  children,
  style,
  color,
  // size,
  textAlign = 'auto',
  variant,
  ...rest
}: Props) => {
  const {colors} = useTheme();

  return (
    <Text
      variant={variant || 'bodyMedium'}
      style={[
        {
          color: color || colors.onSurface,
          // fontSize: size,
          textAlign: textAlign,
        },
        style,
        getOffset(rest),
      ]}
      {...rest}>
      {children}
    </Text>
  );
};
