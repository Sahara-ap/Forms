import { ISelectItem } from 'types/ui/Select/select-item.interface';

export const getSelectItemByValue = (
  items: ISelectItem[],
  value: string,
): ISelectItem | undefined => {
  return items.find((item) => item.value === value);
};
