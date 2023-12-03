import {useGetPartyTypesQuery} from '@/api';
import {
  useAddPartyMutation,
  useGetPartiesQuery,
  useUpdatePartyMutation,
} from '@/api/parties';
import {ScreenContainer} from '@/components';
import {PartyForm} from '@/forms';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';

export const EditPartyScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();

  const {partyData, isEdit} = route.params;

  const {isLoading, refetch} = useGetPartyTypesQuery({});
  const [updateParty] = useUpdatePartyMutation({});
  const [addParty] = useAddPartyMutation({});
  const {refetch: refetchParties} = useGetPartiesQuery({});

  const initialValues = {
    date: partyData?.date ? new Date(partyData?.date) : new Date(),
    numberOfAttendees: partyData?.number_of_attendees
      ? (+partyData?.number_of_attendees).toString()
      : '',
    entranceFee: partyData?.entrance_fee
      ? (+partyData?.entrance_fee).toString()
      : '',
    typeId: partyData?.pure_type_id ? partyData?.pure_type_id : '',
  };

  const onSubmit = async (values: any) => {
    const data = {
      partyData: {
        date: values.date,
        number_of_attendees: +values.numberOfAttendees,
        entrance_fee: +values.entranceFee,
        type_id: values.typeId,
      },
    };

    if (isEdit) {
      await updateParty({
        partyData: {
          ...data.partyData,
          party_id: partyData?.party_id,
        },
      });
    } else {
      await addParty(data);
    }

    await refetchParties();

    navigation.goBack();
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <PartyForm
        initialValues={initialValues}
        isEdit={isEdit}
        onSubmit={onSubmit}
        refetchTypes={refetch}
      />
    </ScreenContainer>
  );
};
