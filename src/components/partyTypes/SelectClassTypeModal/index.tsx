import {useAddPartyTypeMutation, useRemovePartyTypeMutation} from '@/api';
import React from 'react';
import {Modal, useTheme} from 'react-native-paper';
import {RenderPartyType} from '../RenderPartyType';
import {Props} from './props';
import {styles} from './styles';

export const SelectPartyTypeModal = ({
  visible,
  hideModal,
  selectTypeId,
  refetch,
}: Props) => {
  const {colors} = useTheme();

  const [addPartyType] = useAddPartyTypeMutation({});
  const [removePartyType] = useRemovePartyTypeMutation({});

  const handleSelect = (item: string) => {
    selectTypeId(item);
    hideModal();
  };

  const handleAddPartyType = async (typeName: string) => {
    await addPartyType({typeName});
    refetch();
  };

  const handleRemovePartyType = async (typeId: number) => {
    await removePartyType({typeId});
    refetch();
  };

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      style={styles.container}
      contentContainerStyle={{backgroundColor: colors.background}}>
      <RenderPartyType
        selectItem={handleSelect}
        addPartyType={handleAddPartyType}
        removePartyType={handleRemovePartyType}
      />
    </Modal>
  );
};
