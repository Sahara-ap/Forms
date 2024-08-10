import { forwardRef, useLayoutEffect, useState } from 'react';

import { IInputProps } from './Input.types';

import * as S from './Input.styled';

export const Input = forwardRef<HTMLInputElement | null, IInputProps>(
  (
    {
      hasErrors = false,
      isDisabled = false,
      type = 'text',
      className,
      ...props
    },
    ref,
  ) => {
    const [isValidated, setIsValidated] = useState(false);

    useLayoutEffect(() => {
      if (!isValidated  && hasErrors) {
        setIsValidated(true);
      }
    }, [isValidated, hasErrors]);

    return (
      <S.InputWrapper $isDisabled={isDisabled} className={className}>
        <S.Input
          {...props}
          ref={ref}
          disabled={isDisabled}
          type={type}
          $hasErrors={hasErrors}
        />

      </S.InputWrapper>
    );
  },
);
