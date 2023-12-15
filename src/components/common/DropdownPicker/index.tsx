import React, {useState} from 'react';
import {HelperText, Menu, TextInput, TouchableRipple} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const DropdownPicker = ({
  value,
  values,
  selectValue,
  error,
  label,
  placeholder,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const onPress = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const handleSelectValue = (item: string) => {
    selectValue(item);
    closeMenu();
  };

  return (
    <>
      <Menu
        style={styles.container}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableRipple
            borderless
            style={styles.container}
            onPress={onPress}>
            <TextInput
              mode="outlined"
              label={label}
              placeholder={placeholder}
              value={value}
              error={!!error}
              editable={false}
            />
          </TouchableRipple>
        }>
        {values.map(item => {
          const isObject = typeof item === 'object';
          return (
            <Menu.Item
              key={isObject ? item.title : item}
              onPress={() => handleSelectValue(item)}
              title={isObject ? item.title : item}
            />
          );
        })}
      </Menu>

      {error && (
        <HelperText type="error" style={styles.error}>
          {error.toString()}
        </HelperText>
      )}
    </>
  );
};
