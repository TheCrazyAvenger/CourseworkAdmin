import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {DropdownPicker} from '../DropdownPicker';
import {Props} from './props';
import {styles} from './styles';

export const FilterMenu = ({
  sortData,
  setSort,
  sortValue,
  filterData,
  filterValue,
  setFilter,
  filterText,
  setFilterText,
}: Props) => {
  return (
    <View style={styles.container}>
      <DropdownPicker
        value={sortValue?.title}
        values={sortData}
        label="Сортировка"
        placeholder="Выберите"
        selectValue={setSort}
      />
      <View style={styles.filter}>
        <DropdownPicker
          value={filterValue?.title}
          values={filterData}
          label="Фильтрация"
          placeholder="Выберите"
          selectValue={setFilter}
        />
        <TextInput
          mode="outlined"
          label={'Значение'}
          placeholder={'Введите значение'}
          onChangeText={setFilterText}
          value={filterText}
          style={styles.input}
        />
      </View>
    </View>
  );
};
