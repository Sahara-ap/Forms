import { forwardRef } from 'react';

import { IButtonProps } from './Button.types';

import * as S from './Button.styled';

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant, text = '', icon, ...props }, ref) => {
    switch (variant) {
      case 'borderless':
        return (
          <S.BorderlessButton {...props} ref={ref}>
            <>
                {icon && icon}
                {text && text}
              </>
          </S.BorderlessButton>
        );
    }
  },
);
