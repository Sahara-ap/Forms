import styled, { css } from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { FontFamily } from 'styles/style-variables/font-family';
import { TransitionTime } from 'styles/style-variables/transition-time';


export const InputWrapper = styled.div<{ $isDisabled: boolean }>`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{$hasErrors: boolean}>`
  appearance: none;
  width: 100%;
  height: 42px;
  padding: 11px 15px;


  border: 1px solid ${({ $hasErrors }) => ($hasErrors ? '#EC494F' : '#c9c9c9')};
  border-radius: 24px;
  font-family: ${FontFamily.Montserrat};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #272727;
  transition: all ${TransitionTime.Hover};
  outline: none;
  vertical-align: center;

  &::placeholder {
    font-family: ${FontFamily.Montserrat};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #a1a1a1;
    transition: all ${TransitionTime.Hover};
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    height: 32px;
    padding: 7px 11px;

    font-size: 12px;
    line-height: 16px;

    &::placeholder {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &:hover {
    border: 1px solid ${({ $hasErrors }) => ($hasErrors ? '#EC494F' : '#a1a1a1')};
  }

  &:focus {
    border: 1px solid ${({ $hasErrors }) => ($hasErrors ? '#EC494F' : '#3069E5')};
    box-shadow: 0 0 4px 0 rgb(14 70 192 / 40%);

    &::placeholder {
      color: transparent;
    }
  }

  &:disabled {
    border-color: #c9c9c9;
    background-color: #eaeaea;
    color: #c9c9c9;

    &::placeholder {
      color: #c9c9c9;
    }
  }
`;
