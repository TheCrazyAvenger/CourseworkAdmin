import {useDeletPartyMutation, useGetPartiesQuery} from '@/api/parties';
import {FAB, FilterMenu, RenderParties, ScreenContainer} from '@/components';
import {Screens} from '@/constants';
import {selectParties} from '@/store/selectors';
import {IParties} from '@/store/types';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const sortValues = [
  {title: 'Дата (по убыванию)', value: ' ORDER BY date DESC'},
  {title: 'Дата (по возрастанию)', value: ' ORDER BY date ASC'},
  {
    title: 'Кол-во участников (по убыванию)',
    value: ' ORDER BY number_of_attendees DESC',
  },
  {
    title: 'Кол-во участников (по возрастанию)',
    value: ' ORDER BY number_of_attendees ASC',
  },
  {title: 'Стоимость (по убыванию)', value: ' ORDER BY entrance_fee DESC'},
  {title: 'Стоимость (по возрастанию)', value: ' ORDER BY entrance_fee ASC'},
];

const filterValues = [
  {title: 'Дата', value: ' WHERE date = '},
  {title: 'Кол-во участников', value: ' WHERE number_of_attendees = '},
  {title: 'Стоимость', value: ' WHERE entrance_fee = '},
];

export const PartiesScreen = () => {
  const navigation = useNavigation<any>();

  const [selectedSortType, setSelectedSortType] = useState<any>(sortValues[0]);
  const [selectedFilterType, setSelectedFilterType] = useState<any>(
    filterValues[0],
  );
  const [filtetText, setFilterText] = useState('');

  const {isLoading, refetch} = useGetPartiesQuery({
    sort:
      (selectedFilterType?.value && filtetText.length > 0
        ? selectedFilterType.value + `'${filtetText}'`
        : '') + selectedSortType?.value,
  });

  const [deleteParty] = useDeletPartyMutation({});

  const parties = useSelector(selectParties);

  const handleDeleteParty = async (partyId: number) => {
    await deleteParty({partyId});
    refetch();
  };

  const goToAddParty = (partyData: IParties | null, isEdit: boolean) => {
    navigation.navigate(Screens.partyEdit, {partyData, isEdit});
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <FilterMenu
        setSort={setSelectedSortType}
        sortData={sortValues}
        sortValue={selectedSortType}
        filterData={filterValues}
        filterValue={selectedFilterType}
        setFilter={setSelectedFilterType}
        filterText={filtetText}
        setFilterText={setFilterText}
      />
      <RenderParties
        parties={parties}
        deleteParty={handleDeleteParty}
        goToAddParty={goToAddParty}
      />
      <FAB onPress={() => goToAddParty(null, false)} />
    </ScreenContainer>
  );
};
