import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {HelperText, TextInput, TouchableRipple} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const DatePickerInput = ({
  value,
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

  const handleSelectValue = (date: Date) => {
    selectValue(date);
    closeMenu();
  };

  return (
    <>
      <DatePicker
        modal
        mode="datetime"
        open={visible}
        date={new Date()}
        onConfirm={handleSelectValue}
        onCancel={closeMenu}
      />
      <TouchableRipple borderless style={styles.container} onPress={onPress}>
        <TextInput
          mode="outlined"
          label={label}
          placeholder={placeholder}
          value={value}
          error={!!error}
          editable={false}
        />
      </TouchableRipple>
      {error && (
        <HelperText type="error" style={styles.error}>
          {error.toString()}
        </HelperText>
      )}
    </>
  );
};
