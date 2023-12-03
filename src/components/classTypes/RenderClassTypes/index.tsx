import {AddTypeInput} from '@/components/common/AddTypeInput';
import {selectClassTypes} from '@/store/selectors';
import {IClassType} from '@/store/types';
import React from 'react';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {ClassTypeItem} from '../ClassTypeItem';
import {Props} from './props';

const ItemSeparatorComponent = () => {
  return <Divider />;
};

export const RenderClassType = ({
  selectItem,
  addClassType,
  removeClassType,
}: Props) => {
  const classTypes = useSelector(selectClassTypes);

  const keyExtractor = (item: IClassType) => item.type_id.toString();
  const renderItem = ({item}: {item: IClassType}) => (
    <ClassTypeItem
      item={item}
      selectItem={selectItem}
      removeClassType={removeClassType}
    />
  );

  return (
    <FlatList
      data={classTypes}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListFooterComponent={
        <AddTypeInput types={classTypes} addType={addClassType} />
      }
    />
  );
};
