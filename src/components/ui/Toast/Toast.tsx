import React, { ReactNode } from 'react';
import { ToastContentProps } from 'react-toastify';
import { ReactComponent as CloseWhite } from 'assets/toast-icons/toast-close-white.svg';

import * as S from './Toast.styled';

interface ToastProps {
  type: 'success' |  'error';
  children: ReactNode;
}

export const Toast: React.FC<Partial<ToastContentProps> & ToastProps> = ({
  type,
  children,
  closeToast,
}) => {
  switch (type) {
    case 'success':
      return (
        <S.Success>
          {children}
          <S.CloseButton onClick={closeToast}>
            <CloseWhite />
          </S.CloseButton>
        </S.Success>
      );

    case 'error':
      return (
        <S.Error>
          {children}
          <S.CloseButton onClick={closeToast}>
            <CloseWhite />
          </S.CloseButton>
        </S.Error>
      );
  }
};
