export type Props = {
  selectItem: (type: string) => void;
  addPartyType: (typeName: string) => void;
  removePartyType: (typeName: number) => void;
};
