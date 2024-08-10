import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IInputProps
  extends Partial<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> {
  hasErrors?: boolean;
  isDisabled?: boolean;
  type?: 'text';
}
