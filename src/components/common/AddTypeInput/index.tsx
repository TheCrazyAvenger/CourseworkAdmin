import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Props} from './props';

export const AddTypeInput = ({types, addType}: Props) => {
  const [value, setValue] = useState('');

  const valueValid = () =>
    value && types.findIndex(item => item.type_name === value) === -1;

  const handleAddType = () => {
    if (valueValid()) {
      addType(value);
    }
  };

  return (
    <TextInput
      mode="outlined"
      label={'Новый тип'}
      placeholder={'Добавить тип'}
      value={value}
      onChangeText={setValue}
      onSubmitEditing={handleAddType}
    />
  );
};
