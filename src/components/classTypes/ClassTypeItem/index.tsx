import {Typography} from '@/components/common/Typography';
import React from 'react';
import {View} from 'react-native';
import {TouchableRipple, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Props} from './props';
import {styles} from './styles';

export const ClassTypeItem = ({item, selectItem, removeClassType}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableRipple
      borderless
      style={styles.container}
      onPress={() => selectItem(item.type_id.toString())}>
      <View style={styles.content}>
        <Typography mv={8} variant="headlineSmall">
          {item.type_name}
        </Typography>
        <Icon
          name="close"
          color={colors.onPrimaryContainer}
          size={20}
          onPress={() => removeClassType(+item.type_id)}
        />
      </View>
    </TouchableRipple>
  );
};
