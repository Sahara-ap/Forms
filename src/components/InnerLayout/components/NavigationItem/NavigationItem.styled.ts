import { LinkItem } from 'components/ui/LinkItem';
import styled, { css } from 'styled-components';
import { BreakPoint } from 'styles/style-variables/breakpoint';
import { FontFamily } from 'styles/style-variables/font-family';
import { TransitionTime } from 'styles/style-variables/transition-time';


export const NavListItem = styled.li`
  display: flex;
`;

export const NavListLink = styled(LinkItem)<{ $isCurrent: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 8px 24px;
  font-family: ${FontFamily.Montserrat};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #272727;
  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      background-color: #f4f4f7;
    `};
  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      & span {
        font-weight: 700;
      }
    `};
  transition: background-color ${TransitionTime.Hover};

  &:hover {
    background-color: #f4f4f7;
    color: #272727;
    transition: background-color ${TransitionTime.Hover};
  }

  &:focus {
    background-color: #f4f4f7;
    color: #272727;
    transition: background-color ${TransitionTime.Hover};
    outline: none;
  }

  @media (max-width: ${BreakPoint.LaptopTop}) {
    padding: 16px;
    border-radius: 16px;
  }

  @media (max-width: ${BreakPoint.MobileTop}) {
    padding-right: 24px;
    padding-left: 24px;
    border-radius: 0;
  }
`;
