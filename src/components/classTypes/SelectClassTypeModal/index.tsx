import {
  useAddClassTypeMutation,
  useRemoveClassTypeMutation,
} from '@/api/classTypes';
import React from 'react';
import {Modal, useTheme} from 'react-native-paper';
import {RenderClassType} from '../RenderClassTypes';
import {Props} from './props';
import {styles} from './styles';

export const SelectClassTypeModal = ({
  visible,
  hideModal,
  selectTypeId,
  refetch,
}: Props) => {
  const {colors} = useTheme();

  const [addClassType] = useAddClassTypeMutation({});
  const [removeClassType] = useRemoveClassTypeMutation({});

  const handleSelect = (item: string) => {
    selectTypeId(item);
    hideModal();
  };

  const handleAddClassType = async (typeName: string) => {
    await addClassType({typeName});
    refetch();
  };

  const handleRemoveClassType = async (typeId: number) => {
    await removeClassType({typeId});
    refetch();
  };

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      style={styles.container}
      contentContainerStyle={{backgroundColor: colors.background}}>
      <RenderClassType
        selectItem={handleSelect}
        addClassType={handleAddClassType}
        removeClassType={handleRemoveClassType}
      />
    </Modal>
  );
};
