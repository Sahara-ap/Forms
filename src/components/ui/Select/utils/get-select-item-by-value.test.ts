import { ISelectItem } from 'types/ui/Select/select-item.interface';

import { getSelectItemByValue } from './get-select-item-by-value.util';

describe('getSelectItemByValue', () => {
  const testItems: ISelectItem[] = [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' },
  ];

  it('should return correct select item if value exists in items', () => {
    const value = '2';
    const expectedItem: ISelectItem = { text: 'Option 2', value: '2' };
    const result = getSelectItemByValue(testItems, value);
    expect(result).toEqual(expectedItem);
  });

  it('should return undefined if value does not exist in items', () => {
    const value = '4';
    const result = getSelectItemByValue(testItems, value);
    expect(result).toBeUndefined();
  });

  it('should return undefined if items array is empty', () => {
    const emptyItems: ISelectItem[] = [];
    const value = '1';
    const result = getSelectItemByValue(emptyItems, value);
    expect(result).toBeUndefined();
  });
});
