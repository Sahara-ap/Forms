import styled, { css } from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { TransitionTime } from 'styles/style-variables/transition-time';
import { ZIndex } from 'styles/style-variables/z-index';

import { SText } from 'components/styled/SText';

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectButton = styled.button<{ $isActive: boolean }>`
  position: relative;
  z-index: ${ZIndex.SelectButton};
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
  min-height: 42px;
  padding: 11px 31px 11px 15px;
  border: 1px solid #c9c9c9;
  border-radius: 24px;
  background-color: #fff;
  transition: all ${TransitionTime.Hover};
  cursor: pointer;
  outline: none;

  & svg {
    flex-shrink: 0;

    & path {
      transition: all ${TransitionTime.Hover};
    }
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    min-height: 32px;
    padding: 7px 31px 7px 11px;
  }

  &:hover {
    border-color: #a1a1a1;
  }

  &:focus {
    border-color: #3069e5;
    box-shadow: 0 0 4px 0 rgb(14 70 192 / 40%);
  }

  &:disabled {
    border-color: #c9c9c9;
    background-color: #eaeaea;
    cursor: auto;

    & span {
      color: #c9c9c9;
    }

    & > svg path {
      fill: #c9c9c9;
    }
  }

  & > svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transition: all ${TransitionTime.Active};
    transform: ${({ $isActive }) =>
      $isActive ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'};

    & path {
      transition: all ${TransitionTime.Active};
    }
  }
`;

export const SelectButtonText = styled(SText)`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  transition: all ${TransitionTime.Hover};

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const SelectMenu = styled.div<{ $isOpened: boolean; $maxMenuHeight: number | null }>`
  position: absolute;
  top: 46px;
  right: 0;
  left: 0;
  z-index: ${ZIndex.SelectMenu};
  max-height: ${({ $maxMenuHeight }) => ($maxMenuHeight ? `${$maxMenuHeight}px` : 'unset')};
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%);
  overflow: auto;
  transition: all ${TransitionTime.Hover};

  ${({ $isOpened }) =>
    $isOpened
      ? css`
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(-10px);
        `};

  @media (max-width: ${BreakPoint.MobileTop}) {
    top: 36px;
  }
`;

export const MenuList = styled.ul<{ $isOpened: boolean; $itemsLength: number }>`
  display: grid;
  justify-items: start;
  transition: all ${TransitionTime.Hover};

  ${({ $isOpened, $itemsLength }) =>
    $isOpened
      ? css`
          grid-template-rows: repeat(${$itemsLength}, 1fr);
          padding: 10px 0;
        `
      : css`
          grid-template-rows: repeat(${$itemsLength}, 0fr);
          padding: 0;
          pointer-events: none;
        `}
`;

export const MenuItem = styled.li`
  width: 100%;
  overflow: hidden;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background-color: transparent;
  overflow: hidden;
  transition: all ${TransitionTime.Hover};
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-color: #f4f4f7;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    padding: 12px;
  }
`;

export const MenuButtonText = styled(SText)<{ $isActive: boolean; $isOpened: boolean }>`
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '500')};
  line-height: 18px;
  text-align: left;
  ${({ $isActive, $isOpened }) => {
    if (!$isOpened) {
      return css`
        color: transparent;
      `;
    }
    if ($isActive) {
      return css`
        color: #272727;
      `;
    }
  }};
  transition: all ${TransitionTime.Hover};

  @media (max-width: ${BreakPoint.MobileTop}) {
    font-size: 12px;
    line-height: 16px;
  }
`;
