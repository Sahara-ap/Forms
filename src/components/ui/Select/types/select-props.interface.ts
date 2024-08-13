import { ISelectItem } from 'types/ui/Select/select-item.interface';

export interface ISelectProps {
  items: ISelectItem[];
  currentValue: string;
  isDisabled?: boolean;
  className?: string;
  onChange: (newValue: string) => void;
}
