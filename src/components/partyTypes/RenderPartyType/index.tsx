import {AddTypeInput} from '@/components/common/AddTypeInput';
import {selectPartyTypes} from '@/store/selectors';
import {IClassType} from '@/store/types';
import React from 'react';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {PartyTypeItem} from '../PartyTypeItem';
import {Props} from './props';

const ItemSeparatorComponent = () => {
  return <Divider />;
};

export const RenderPartyType = ({
  selectItem,
  addPartyType,
  removePartyType,
}: Props) => {
  const partyTypes = useSelector(selectPartyTypes);

  const keyExtractor = (item: IClassType) => item.type_id.toString();
  const renderItem = ({item}: {item: IClassType}) => (
    <PartyTypeItem
      item={item}
      selectItem={selectItem}
      removePartyType={removePartyType}
    />
  );

  return (
    <FlatList
      data={partyTypes}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListFooterComponent={
        <AddTypeInput types={partyTypes} addType={addPartyType} />
      }
    />
  );
};
