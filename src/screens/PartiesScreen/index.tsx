import {useDeletPartyMutation, useGetPartiesQuery} from '@/api/parties';
import {FAB, RenderParties, ScreenContainer} from '@/components';
import {Screens} from '@/constants';
import {selectParties} from '@/store/selectors';
import {IParties} from '@/store/types';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

export const PartiesScreen = () => {
  const navigation = useNavigation<any>();

  const {isLoading, refetch} = useGetPartiesQuery({});

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
      <RenderParties
        parties={parties}
        deleteParty={handleDeleteParty}
        goToAddParty={goToAddParty}
      />
      <FAB onPress={() => goToAddParty(null, false)} />
    </ScreenContainer>
  );
};
