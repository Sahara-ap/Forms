import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

export type TButtonVariant =
  | 'borderless'

export interface IButtonProps
  extends Partial<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  variant: TButtonVariant;
  text?: string;
  icon?: ReactElement;
}
