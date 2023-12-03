export type Props = {
  visible: boolean;
  hideModal: () => void;
  refetch: () => void;
  selectTypeId: (id: string) => void;
};
