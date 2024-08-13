import { ReactNode } from 'react';

type TPopupVariant = 'default' | 'wide';

export interface IPopupProps {
  title: string;
  content: ReactNode;
  variant?: TPopupVariant;
  handlePopupClose: () => void;
}
